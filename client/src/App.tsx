import { SideBarChats } from "./components/sideBarChats"
import { Chats } from "./components/chat"
import { Channels } from "./components/channels"

function App() {
  return (
    <div className="flex">
      <SideBarChats />
      <div className="flex">
        <Channels />
        <Chats />
      </div>
    </div>
  )
}

export default App
