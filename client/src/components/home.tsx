import { useRef } from "react"
import { socket } from "../socket"

const Home: React.FC<any> = ({ setUser }) => {
  const username = useRef<any>()
  function handleSetUser(e: any) {
    e.preventDefault()

    socket.emit("set_username", username.current.value)
    setUser(username.current.value)
  }

  return (
    <div className="bg-[#1f1f20] text-zinc-200 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-zinc-400 py-5 text-3xl">Escolha um nome para entrar</h1>
        <form onSubmit={handleSetUser} className="bg-[#323338] shadow-md rounded max-w-sm mx-auto px-5 py-4 flex gap-4 flex-col w-full">
            <input ref={username} className="outline-none rounded bg-zinc-600 px-3 py-1" type="text" required placeholder="Nome..."/>
            <input className="outline-none rounded bg-zinc-600 w-full py-1 text-lg font-bold cursor-pointer hover:bg-zinc-700 transition-all" type="submit" value="Entrar" />
        </form>
    </div>
  )
}

export { Home }