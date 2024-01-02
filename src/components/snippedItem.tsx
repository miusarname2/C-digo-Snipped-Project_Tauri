import { useSnippetsStore } from "../store/snippetsStore";
import {twMerge} from 'tailwind-merge'
import { readTextFile } from "@tauri-apps/api/fs";
import { desktopDir,join } from "@tauri-apps/api/path";

interface Props{
  snippedName:string;
}

export default function snippedItem({snippedName} : Props) {
  const setSelectedSnip = useSnippetsStore(
    state => state.setSelectedSnip
  )

  const selectedSnipedc = useSnippetsStore(
    state => state.selectedSnipped
  )


  return (
    <div //className="py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer"
    // className={
    //   selectedSnipedc === snippedName? "bg-amber-300" : "bg-zinc-900"
    // }

    className={twMerge(
      "py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer", selectedSnipedc?.name === snippedName ? "bg-amber-300" : "bg-zinc-900"
    )}
    onClick={
      async()=>{
        const DesktopPath = await desktopDir();
        const file = await join(DesktopPath,"taurifiles",`${snippedName}`);
        const contentCode =await readTextFile(file)
        console.log(contentCode)
        setSelectedSnip(
          {
            name: snippedName,
            content: contentCode,
          }
          
        );
        console.log(selectedSnipedc);

      }
    }>
      <h1>
        {snippedName}
      </h1>
    </div>
  )
}
