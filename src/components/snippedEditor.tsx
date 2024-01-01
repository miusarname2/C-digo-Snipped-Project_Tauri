import Editor from "@monaco-editor/react";

export default function snippedEditor() {
  return (
      <Editor 
      theme="vs-dark"
      defaultLanguage="swift"
      options={
        {
          fontSize :15
        }
      }
      />
  )
}
