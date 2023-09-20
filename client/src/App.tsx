import { SideBarChats } from "./components/sideBarChats"
import { Chats } from "./components/chat"
import { Channels } from "./components/channels"
import { useState } from "react"

function App() {
  const [chatSelect, setChatSelect] = useState("geral")
  
  return (
    <div className="flex w-screen h-screen">
      <SideBarChats />
      <div className="flex w-full">
        <Channels channelSelect={chatSelect} setChannelSelect={setChatSelect} />
        <Chats channel={chatSelect} />
      </div>
    </div>
  )
}

export default App
