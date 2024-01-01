import { create } from "zustand";

interface SnippedState {
  snippetsName: string[];
  selectedSnipped : string | null;
  addSinippedName : (name : string)=> void;
  setSnippetNames : (names : string[]) => void;
}

export const useSnippetsStore = create<SnippedState>((set) => ({
  snippetsName: [],
  selectedSnipped:null,
  addSinippedName(name){
    return set(
        (state : any)=>({
            snippetsName: [state.snippetsName, name]
        })
      )
  },
  setSnippetNames(names) {
      return set({snippetsName:names})
  },
}));
