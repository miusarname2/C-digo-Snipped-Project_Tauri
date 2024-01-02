import { useEffect } from "react";
import { readDir } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import Item from "./snippedItem";
import { useSnippetsStore } from "../store/snippetsStore";

function snippedList() {
  const setSnippedNames = useSnippetsStore((state) => state.setSnippetNames);
  const SnippetsNames = useSnippetsStore((state) => state.snippetsName);

  useEffect(() => {
    async function loadFiles() {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}taurifiles`);
      const archiveList = result.map((file) => file.name!);
      setSnippedNames(archiveList);
      console.log(archiveList);
    }

    loadFiles();
  }, []);

  return (
    <div>
      {SnippetsNames.map((SnipN) => (
        <div>
          {SnipN !== ".DS_Store" && (
            <h1>
              <Item snippedName={SnipN} />
            </h1>
          )}
        </div>
      ))}
    </div>
  );
}

export default snippedList;
