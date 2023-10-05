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
  [key: string]: {
    users: RoomUser[],
    messagens: Message[]
  }
}

const users: RoomUser[] = []
const rooms: Rooms = {}

// const r = {
//   geral: {
//     users: [],
//     messagens: []
//   },
//   git: {
//     users: [],
//     messagens: []
//   },
// }

// function delUserRoom(room: string, id: string) {
//   Object.keys(rooms).map((r) => {
//     console.log(rooms[r])
    
//     if (r != room) {
//       console.log(" ")
//       console.log(r)
      
//       // const remove = rooms[r].users.filter(user => user.socket_id !== id)
//       // console.log(remove)
//     }
//   })
// }

function setUserRoom(room: string, id: string) {
  const userInRoom = users.filter(user => id === user.socket_id)
  const userId = rooms[room].users.find(user => user.socket_id === userInRoom[0].socket_id)

  if (!userId) rooms[room].users.push(userInRoom[0])
}

function setRoom(newRoom: string) {
  rooms[newRoom] = {
    users: [],
    messagens: []
  }
}

io.on('connection', socket => {
  socket.on('msg', (msg: Message): void => {
    const newMessage: Message = {
      id: socket.data.id,
      username: socket.data.username,
      img: msg.img,
      text: msg.text
    }

    io.emit('msgs', newMessage)
  })
  
  socket.on('select_room', (data) => {
    const dataRoom: string = data.room

    socket.join(dataRoom)
    if (!rooms.hasOwnProperty(dataRoom)) setRoom(dataRoom)
    // delUserRoom(dataRoom, data.socket_id)
    setUserRoom(dataRoom, data.socket_id)
  })

  socket.on('set_username', (username: string) => {
    socket.data.username = username
    socket.data.id = socket.id

    io.emit("user_id", socket.data.id)

    users.push({
      username: socket.data.username,
      socket_id: socket.data.id
    })
  })
})  
