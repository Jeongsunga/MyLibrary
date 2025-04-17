import { create } from "zustand";

const useUserStore = create((set) => ({
  authenticate: false, 
  setAuthenticate: (login) =>
    set(() => ({ authenticate: login }))
}));

export default useUserStore;
