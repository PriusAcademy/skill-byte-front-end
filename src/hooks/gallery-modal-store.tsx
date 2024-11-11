import { create } from "zustand";

interface createGalleryModalStore {
  open: boolean;
  data: string[];
  onOpen: (data: string[]) => void;
  onClose: () => void;
}

const useGalleryModal = create<createGalleryModalStore>((set) => ({
  open: false,
  onOpen: (data: string[]) => set({ open: true, data }),
  onClose: () => set({ open: false, data: [] }),
  data: [],
}));

export default useGalleryModal;
