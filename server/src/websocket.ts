import { io } from "./http";

interface Message {
  id: string,
  username: string,
  img: string,
  text: string
}

interface RoomUser {
  username: string,
  socket_id: string
}

interface Rooms {
  [key: string]: Message[]
}

const users: RoomUser[] = []
const rooms: Rooms = {}

function setMessage(room: string, data: Message) {
  if (!rooms.hasOwnProperty(room)) setRoom(room)
  rooms[room].unshift(data)
}

function setRoom(newRoom: string) {
  rooms[newRoom] = []
}

io.on('connection', socket => {
  socket.join("geral")
  socket.on('msg', (data): void => {
    const newMessage: Message = {
      id: socket.data.id,
      username: socket.data.username,
      img: data.img,
      text: data.text
    }

    setMessage(data.room, newMessage)
    io.to(data.room).emit('msgs', rooms[data.room])
  })
  
  socket.on('select_room', (room: string) => {
    socket.join(room)
    if (!rooms.hasOwnProperty(room)) setRoom(room)

    io.to(room).emit("set_messagens_room", rooms[room])
  })

  socket.on('set_username', (username: string) => {
    socket.data.username = username
    socket.data.id = socket.id

    users.push({
      username: socket.data.username,
      socket_id: socket.data.id
    })
  })
})  
