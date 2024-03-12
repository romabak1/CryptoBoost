import { create } from "zustand";

const useModalStore = create((set) => ({
  isModal: false,
  setIsModal: (payload) => set({ isModal: payload }),
}));

export default useModalStore;
