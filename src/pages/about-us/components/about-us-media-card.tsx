interface MediaCardProps {
  src: string;
  title: string;
  content: string[];
}

const MediaCard = ({ src, content, title }: MediaCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center ">
      <img src={src} className="h-40 text-sky-600 w-40 rounded-full" />
      <div className="flex flex-col gap-4 ">
        <h2 className="text-secondaryBlue text-center md:text-start text-2xl font-semibold">
          {title}:
        </h2>

        <div className="flex flex-col gap-2 text-gray-600">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
