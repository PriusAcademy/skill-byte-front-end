interface GalleryCardProps {
  onClick: () => void;
  src: string;
  title: string;
  date: string;
}

const GalleryCard = ({ onClick, src, title, date }: GalleryCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative group w-72 h-72 shadow-activeBlue cursor-pointer transition-all duration-200 ease-in"
    >
      <div className="absolute inset-0 bg- w-full h-full rounded-lg transform rotate-3 -translate-y-2" />
      <div className="absolute inset-0 bg-secondaryBlue w-full h-full rounded-lg transform rotate-6 -translate-y-4 -translate-x-2" />
      <div className="absolute inset-0 bg-sky-300 w-full h-full rounded-lg transform rotate-9 -translate-y-4 -translate-x-4 shadow-lg" />
      <div className="relative bg-activeBlue w-full h-full rounded-lg flex items-center justify-center shadow-2xl">
        <div className="p-1 space-y-1 overflow-hidden">
          <img
            src={src}
            alt=""
            className="h-full w-full group-hover:scale-105 hover:rounded-md transition duration-100"
          />
          <p className="text-sm text-center text-white font-semibold">
            {title}
          </p>
          <p className="text-sm text-center text-white font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
