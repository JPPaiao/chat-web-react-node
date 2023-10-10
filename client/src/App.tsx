import { SideBarChats } from "./components/sideBarChats"
import { Chats } from "./components/chat"
import { Channels } from "./components/channels"
import { Home } from "./components/home"
import { useState, useEffect } from "react"
import { socket } from "./socket"

interface Message {
  id: string,
  name: string,
  img: string,
  text: string
}

function App() {
  const [user, setUser] = useState<string | null>(null)
  const [chatSelect, setChatSelect] = useState<string>("geral")
  const [lisChat, setLisChat] = useState<Message[]>([])

  useEffect((): any => {
    socket.on("set_messagens_room", (msgs: Message[]) => {
      setLisChat(msgs)
    })

    return () => socket.off("set_messagens_room")
  }, [socket])

  useEffect((): any => {
    socket.on("msgs", (msgs: Message[]) => {
      setLisChat(msgs)
    })

    return () => socket.off("msgs")
  }, [socket])

  return (user == null) ? (
    <Home setUser={setUser}/>
  ) : (
    <div className="flex w-screen h-screen">
      <SideBarChats />
      <div className="flex w-full">
        <Channels channelSelect={chatSelect} setChannelSelect={setChatSelect} user={user} />
        <Chats channel={chatSelect} listMessage={lisChat} user={user} />
      </div>
    </div>
  )
}

export default App
