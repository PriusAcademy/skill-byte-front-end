import { useLocation } from "react-router-dom";
import useLoginModal from "../hooks/login-modal-store";

interface TitleCardProps {
  title: string;
  src: string;
  major: string;
}

const TitleCard = ({ major, title, src }: TitleCardProps) => {
  const loginModal = useLoginModal();
  console.log(loginModal);
  const { pathname } = useLocation();

  const onClick = () => {
    const newMajor = major.split(" ").join("-");
    const newTitle = title.split(" ").join("-").replace("&", "%26");
    const newPath =
      pathname + "/" + newMajor.toLowerCase() + "/" + newTitle.toLowerCase();
    window.location.href = newPath;
  };

  return (
    <div
      onClick={onClick}
      className="flex preserve-3d items-center gap-3 transition hover:translate-z-10 duration-150 border rounded-sm p-1 hover:shadow-md cursor-pointer"
    >
      <img src={src} className="h-8 w-8" alt="" />
      <p className="text-sm text-gray-600 font-semibold">{title}</p>
    </div>
  );
};

export default TitleCard;
