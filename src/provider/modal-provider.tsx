import { useEffect, useState } from "react";
import LoginModal from "../modals/login-modal";

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
    </>
  );
};

export default ModalProvider;
