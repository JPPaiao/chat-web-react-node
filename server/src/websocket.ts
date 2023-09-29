import { io } from "./http";

interface Message {
  id: string,
  name: string,
  img: string,
  text: string
}

io.on('connection', socket => {
  socket.on('msg', (msg: Message): void => {
    const newMessage: Message = {
      id: socket.data.id,
      name: socket.data.username,
      img: msg.img,
      text: msg.text
    }

    io.emit('msgs', newMessage)
  })
  

  socket.on('set_username', (username: string) => {
    socket.data.username = username
    socket.data.id = socket.id
  })
})  
