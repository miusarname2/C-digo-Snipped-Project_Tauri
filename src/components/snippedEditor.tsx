import Editor from "@monaco-editor/react";
import { useSnippetsStore } from "../store/snippetsStore";

export default function snippedEditor() {
  const selectedSnip = useSnippetsStore(state => state.selectedSnipped);


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
