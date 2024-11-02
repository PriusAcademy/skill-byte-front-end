import { Button } from "./ui/button";
import { signOut } from "../utils/utils";

const SignOut = () => {
  const onClick = () => {
    signOut();
    window.location.reload();
  };
  return (
    <Button
      onClick={onClick}
      className="w-full bg-red-500 font-semibold text-white hover:bg-red-500 hover:bg-opacity-80"
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
