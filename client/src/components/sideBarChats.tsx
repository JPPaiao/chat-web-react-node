import { User } from "./profiles"

const SideBarChats: React.FC = () => {
  interface Profiles {
    img: string,
    messagens: number
  }
  
  const profilesList: Array<Profiles> = [
    {
      img: "https://avatars.githubusercontent.com/u/2254731?v=4",
      messagens: 17  
    },
    {
      img: "https://avatars.githubusercontent.com/u/2254731?v=4",
      messagens: 10  
    },
    {
      img: "https://avatars.githubusercontent.com/u/2254731?v=4",
      messagens: 3  
    },
    {
      img: "https://avatars.githubusercontent.com/u/2254731?v=4",
      messagens: 8  
    },
  ]

  return (
    <nav className="bg-[#1e1f23] h-screen scrolls">
        <ul className="py-4 px-2">
            {
              profilesList.map((profileUser: Profiles) => (
                <User profile={profileUser} />
              ))
            }
        </ul>
    </nav>
  )
}

export { SideBarChats }