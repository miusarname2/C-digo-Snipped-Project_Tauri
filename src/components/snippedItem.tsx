import { useSnippetsStore } from "../store/snippetsStore";

interface Props{
  snippedName:string;
}

export default function snippedItem({snippedName} : Props) {
  const setSelectedSnip = useSnippetsStore(
    state => state.setSelectedSnip
  )


  return (
    <div className="py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer"
    onClick={
      (e)=>{
        setSelectedSnip(
          snippedName
        )
      }
    }>
      <h1>
        {snippedName}
      </h1>
    </div>
  )
}
