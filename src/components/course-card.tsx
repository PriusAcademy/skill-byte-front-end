interface CourseCardProps {
  src: string;
  title: string;
  description: string;
  time: string;
}

const CourseCard = ({ src, title, description, time }: CourseCardProps) => {
  return (
    <div className="flex gap-6 border-b border-gray-400 pb-2 ">
      <img src={src} className="md:w-72 w-44 h-32 md:h-44" />
      <div className="flex flex-col justify-start gap-1 md:gap-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default CourseCard;
