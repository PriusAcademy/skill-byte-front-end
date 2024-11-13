import { create } from "zustand";

interface createLoginModalStore {
  open: boolean;
  href: string;
  duration: string;
  onOpen: ({ href, duration }: { href: string; duration: string }) => void;
  onClose: () => void;
}

const useTestModal = create<createLoginModalStore>((set) => ({
  open: false,
  href: "",
  duration: "",
  onOpen: ({ href, duration }) => set({ open: true, href, duration }),
  onClose: () => set({ open: false, href: "" }),
}));

export default useTestModal;
