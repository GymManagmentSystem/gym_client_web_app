import { create } from "zustand";

interface UserNameStore {
  userName: string;
  setName: (name: string) => void;
}

const useUserNameStore = create<UserNameStore>((set) => ({
  userName: "",
  setName: (userName) => set(() => ({ userName })),
}));

export default useUserNameStore;
