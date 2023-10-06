import { socket } from "../socket"

interface Rooms {
  [key: string]: string[]
}

interface Props {
  channelSelect: string,
  setChannelSelect: any,
  user: string,
}

const Channels: React.FC<Props> = ({ channelSelect, setChannelSelect, user }) => {
  const channelsServer: Rooms = {
    "programação": [
      "geral",
      "git",
      "github",
      "docker"
    ],
    "back-end": [
      "python",
      "node",
      "java",
    ],
    "front-end": [
      "javascript",
      "typescript",
      "react",
      "angular",
      "vue"
    ],
    "banco-de-dados": [
      "mysql",
      "mongodb",
      "oracle",
      "postgresql"
    ]
  }

  function handleSelectRoom(room: string) {
    socket.emit("select_room", room)

    setChannelSelect(room)
  }

  return (
    <nav className="bg-[#272729] text-zinc-400 overflow-y-scroll h-screen scrolls max-w-md w-80">
      <div className="sticky top-0 bg-[#272729] flex items-center justify-between px-5 py-2 shadow-md h-12">
        <h1 className="text-white font-bold">{user.toLocaleUpperCase()}</h1> 
        <div className="px-2 cursor-pointer">
          <div className="w-2 h-2 bg-[#2c2d31] rotate-[138deg] relative top-[2px] z-10"></div>
          <div className="w-2 h-2 bg-[#cacbcf] rotate-[138deg] relative bottom-1 "></div>
        </div>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.DDy4d3xnrupn-Uud5bjayQHaEK?pid=ImgDet&rs=1" alt="" />
      </div>
      <main className="px-3 py-1 flex flex-col ">
        {
          Object.keys(channelsServer).map((channel: string) => (
            <section 
              key={channel}
            >
              <div className="pt-3 text-base font-semibold">
                <h2 className="cursor-pointer">  
                  {channel.toUpperCase()}
                </h2>
              </div>
              <ul className="flex flex-col gap-2 justify-between ">
                {
                  channelsServer[channel].map((chatChannels: string) => {
                    const clas: string = `px-1 py-1 font-semibold ${channelSelect == chatChannels ? 'text-white' : ' '}`
                    
                    return (
                      <li 
                        className="hover:bg-zinc-700 rounded w-full px-2 flex items-center gap-1 cursor-pointer"
                        onClick={() => handleSelectRoom(chatChannels)}
                        key={chatChannels}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img">
                          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                          </path>
                        </svg>
                        <h3 className={clas} >
                          {chatChannels}
                        </h3>
                      </li>
                  )})
                }
              </ul>
            </section>
          ))
        }
      </main>
      <footer className="sticky bottom-0 bg-[#232428] w-full">
        <div className="px-1 py-2 flex justify-evenly gap-1">
          <div className="flex hover:bg-zinc-700 rounded py-[2px] px-3 cursor-pointer">
            <div className="">
              <img className="max-w-[60px] w-8 relative right-2 top-[2px]" src="https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0" alt=" "/>
              <div>
                <div className="relative left-[10px] top-[6px]">
                  <div className="bg-[#232428] w-4 h-4 rounded-full absolute z-10 bottom-0"></div>
                  <div className="absolute z-20 bottom-[3px] left-[-4px]">
                    <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
                      <mask id=":rg:">
                        <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                        <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect>
                        <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)" ></polygon>
                        <circle fill="black" cx="12.5" cy="10" r="0"></circle>
                      </mask>
                      <rect fill="#23a55a" width="25" height="15" mask="url(#:rg:)"></rect>
                    </svg>
                    <rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true"></rect>
                  </div>
                </div>
              </div>
            </div> 
            <div className="flex flex-col">
              <h1 className="font-bold text-sm text-white">{user.toLocaleUpperCase()}</h1>
              <span className="text-xs">Disponível</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <div className="p-1 cursor-pointer rounded hover:bg-zinc-700">
              <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z" fill="currentColor"></path></svg>
            </div>
            <div className="p-1 cursor-pointer rounded hover:bg-zinc-700">
              <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>
            </div>
            <div className="p-1 cursor-pointer rounded hover:bg-zinc-700">
            <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
            </div>
          </div>
        </div>
      </footer>
    </nav>
  )
}

export { Channels }