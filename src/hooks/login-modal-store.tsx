import { create } from "zustand";

interface createLoginModalStore {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<createLoginModalStore>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useLoginModal;
