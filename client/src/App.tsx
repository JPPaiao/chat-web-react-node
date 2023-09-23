import { SideBarChats } from "./components/sideBarChats"
import { Chats } from "./components/chat"
import { Channels } from "./components/channels"
import { useState } from "react"

interface Messagem {
  img: string,
  name: string,
  text: string
}

function App() {
  const [chatSelect, setChatSelect] = useState("geral")
  const [lisChat, setLisChat] = useState<Array<Messagem>>([
    {
      img: "https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0",
      name: "Jão",
      text: "Teste"
    },
  ])
  
  return (
    <div className="flex w-screen h-screen">
      <SideBarChats />
      <div className="flex w-full">
        <Channels channelSelect={chatSelect} setChannelSelect={setChatSelect} />
        <Chats channel={chatSelect} listMessage={lisChat} setLisChat={setLisChat}/>
      </div>
    </div>
  )
}

export default App
