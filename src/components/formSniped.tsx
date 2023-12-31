import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";

export default function formSniped() {
  return (
    <div>
        <form onSubmit={async (e)=>{
            e.preventDefault();
            const desktopPath =await desktopDir()
            console.log(desktopPath)
            await writeTextFile(`${desktopPath}taurifiles/text.txt`,"hello");
            }}>
            <input type="text" placeholder="Write a Snipped" className="bg-zinc-900 w-full border-none outline-none p-4" />
            <button type="submit" className="hidden">save</button>
        </form>
    </div>
  )
}
