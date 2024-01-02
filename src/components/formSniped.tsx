import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useState } from "react";
import { useSnippetsStore } from "../store/snippetsStore"; 

export default function formSniped() {
  const [snippetName, setSetsnippetName] = useState('');
  const addSnippedName =useSnippetsStore((state) => state.addSinippedName);
  return (
    <div>
        <form onSubmit={async (e)=>{
            e.preventDefault();

            //if(setsnippetName)

            const desktopPath =await desktopDir()
            console.log(desktopPath)
            await writeTextFile(`${desktopPath}taurifiles/${snippetName}.js`, "");
            setSetsnippetName('');
            window.location.reload();
            }}>
            <input type="text" placeholder="Write a Snipped" className="bg-zinc-900 w-full border-none outline-none p-4" onChange={
              (e)=>setSetsnippetName(e.target.value)
            } value={snippetName}/>
            <button type="submit" className="hidden">save</button>
        </form>
    </div>
  )
}
