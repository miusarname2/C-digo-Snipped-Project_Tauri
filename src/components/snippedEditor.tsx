import Editor from "@monaco-editor/react";
import { useSnippetsStore } from "../store/snippetsStore";
import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useEffect, useState } from "react";

export default function snippedEditor() {
  const selectedSnip = useSnippetsStore(state => state.selectedSnipped);
  const [text, setText] = useState<string | undefined>('');

  useEffect(() => {
    if(!selectedSnip) return;


    const saveText =setTimeout(async() => {
      const desktDir = await desktopDir();
      await writeTextFile(`${desktDir}/taurifiles/${selectedSnip.name}`, text ?? '');
      console.log("Saing text");
      
    }, 2000);
    return () => clearTimeout(saveText);
  }, [text])
  


  return (
      <>
      
      {
        selectedSnip ? (
          <Editor 
      theme="vs-dark"
      defaultLanguage="swift"
      options={
        {
          fontSize :15
        }
      }
      onChange={
        (value)=> setText(value)
      }
      value={selectedSnip.content ?? ""}
      />
        ) : (
          <h1>
            No Insip Slect
          </h1>
        )
      }

      </>
  )
}
