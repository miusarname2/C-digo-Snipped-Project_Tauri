import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useState } from "react";

export default function formSniped() {
  const [setsnippetName, setSetsnippetName] = useState('');
  return (
    <div>
        <form onSubmit={async (e)=>{
            e.preventDefault();

            //if(setsnippetName)

            const desktopPath =await desktopDir()
            console.log(desktopPath)
            await writeTextFile(`${desktopPath}taurifiles/${setsnippetName}.json`, JSON.stringify({Greeting:"Hello"}));
            setSetsnippetName('');
            }}>
            <input type="text" placeholder="Write a Snipped" className="bg-zinc-900 w-full border-none outline-none p-4" onChange={
              (e)=>setSetsnippetName(e.target.value)
            } value={setsnippetName}/>
            <button type="submit" className="hidden">save</button>
        </form>
    </div>
  )
}
