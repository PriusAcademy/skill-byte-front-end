import { useEffect, useState } from "react";
import LoginModal from "../modals/login-modal";
import GalleryModal from "../modals/gallery-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
      <GalleryModal />
    </>
  );
};

export default ModalProvider;
