import create from "zustand";

const useStore = create((set: any) => ({
  name: "",
  setName: (name: string) => set({ name: name }),
  result: "",
  setResult: (result: string) => set({ result: result }),
}));

export default useStore;
