import { User } from "./profiles"

const SideBarChats: React.FC = () => {
  interface Profiles {
    id: number,
    img: string,
    messagens: number
  }
  
  const profilesList: Array<Profiles> = [
    {
      id: 0,
      img: "https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0",
      messagens: 17  
    },
    {
      id: 1,
      img: "https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0",
      messagens: 10  
    },
    {
      id: 2,
      img: "https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0",
      messagens: 3  
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/R.01b1e436c03e167d3b2b466f75c184a1?rik=CWHFzJtI7PjBdg&pid=ImgRaw&r=0",
      messagens: 8  
    },
  ]

  return (
    <nav className="bg-[#1e1f23] h-screen scrolls">
        <ul className="py-4 px-2">
            {
              profilesList.map((profileUser: Profiles) => (
                <User key={profileUser.id} profile={profileUser} />
              ))
            }
        </ul>
    </nav>
  )
}

export { SideBarChats }