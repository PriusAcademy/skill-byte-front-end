import { useLocation } from "react-router-dom";
import useLoginModal from "../hooks/login-modal-store";
import { cn } from "../lib/utils";
import { getUser } from "../utils/isAuthorized";

interface TitleCardProps {
  title: string;
  src: string;
  id: string;
  major: string;
  className?: string;
  iconSize?: string;
  titleStyle?: string;
}

const TitleCard = ({
  major,
  title,
  src,
  id,
  iconSize,
  className,
  titleStyle,
}: TitleCardProps) => {
  const loginModal = useLoginModal();
  const { pathname } = useLocation();
  const user = getUser();
  const onClick = () => {
    if (!user) {
      loginModal.onOpen();
    } else {
      const newMajor = major.split(" ").join("-");
      // const newTitle = title.split(" ").join("-").replace("&", "%26");
      const newPath = pathname + "/" + newMajor.toLowerCase() + "/" + id;
      window.location.href = newPath;
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex preserve-3d items-center gap-3 transition hover:translate-z-10 duration-150 border rounded-sm p-1 hover:shadow-md cursor-pointer",
        className
      )}
    >
      <img src={src} className={cn("h-8 w-8", iconSize)} alt="" />
      <p className={cn("text-sm text-gray-600 font-semibold", titleStyle)}>
        {title}
      </p>
    </div>
  );
};

export default TitleCard;
