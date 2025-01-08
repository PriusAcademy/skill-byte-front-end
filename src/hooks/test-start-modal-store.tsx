// import { create } from "zustand";

// interface createLoginModalStore {
//   open: boolean;
//   href: string;
//   duration: string;
//   startTime: Date | undefined;
//   endTime: Date | undefined;
//   onOpen: ({
//     href,
//     duration,
//     startTime,
//     endTime,
//   }: {
//     href: string;
//     duration: string;
//     startTime: Date;
//     endTime: Date;
//   }) => void;
//   onClose: () => void;
// }

// const useTestModal = create<createLoginModalStore>((set) => ({
//   open: false,
//   href: "",
//   duration: "",
//   startTime: undefined,
//   endTime: undefined,
//   onOpen: ({ href, duration, startTime, endTime }) =>
//     set({ open: true, href, duration, startTime, endTime }),
//   onClose: () => set({ open: false, href: "" }),
// }));

// export default useTestModal;

import { create } from "zustand";

interface createLoginModalStore {
  open: boolean;
  href: string;
  actionString: string;
  title: string;
  subTitle: string;
  onOpen: ({
    href,
    actionString,
    title,
    subTitle,
  }: {
    href: string;
    actionString: string;
    title: string;
    subTitle: string;
  }) => void;
  onClose: () => void;
}

const useTestModal = create<createLoginModalStore>((set) => ({
  open: false,
  href: "",
  duration: "",
  actionString: "",
  title: "",
  subTitle: "",
  onOpen: ({ href, actionString, title, subTitle }) =>
    set({ open: true, href, actionString, title, subTitle }),
  onClose: () => set({ open: false, href: "" }),
}));

export default useTestModal;
