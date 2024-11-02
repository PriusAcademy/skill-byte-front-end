import useLoginModal from "../hooks/login-modal-store";

interface TitleCardProps {
  title: string;
  src: string;
}

const TitleCard = ({ title, src }: TitleCardProps) => {
  const loginModal = useLoginModal();

  return (
    <div
      onClick={loginModal.onOpen}
      className="flex preserve-3d items-center gap-3 transition hover:translate-z-10 duration-150 border rounded-sm p-1 hover:shadow-md cursor-pointer"
    >
      <img src={src} className="h-8 w-8" alt="" />
      <p className="text-sm text-gray-600 font-semibold">{title}</p>
    </div>
  );
};

export default TitleCard;
