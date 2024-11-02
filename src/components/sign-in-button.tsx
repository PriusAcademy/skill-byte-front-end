import useLoginModal from "../hooks/login-modal-store";

const SignInButton = () => {
  const loginModal = useLoginModal();
  return (
    <button
      onClick={loginModal.onOpen}
      className={`font-semibold
        uppercase
    cursor-pointer
    text-secondaryBlue
  hover:text-activeBlue`}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
