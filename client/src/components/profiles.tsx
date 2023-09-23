type Profiles = {
  id: number,
  img: string,
  messagens: number
}

interface Props {
  profile: Profiles
}

const User: React.FC<Props> = ({ profile }) => {
  
  return (
    <li 
      key={profile.id}
      className="px-1 py-2"
    >
      <img className="rounded-full w-14 hover:rounded-xl transition-all" src={profile.img} alt="Foto do usúario" />
      <span className="hidden">{profile.messagens}</span>
    </li>
  )
}

export { User }
