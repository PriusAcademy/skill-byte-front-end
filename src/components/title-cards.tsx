import TitleCard from "./title-card";

interface TitleCardsProps {
  title: string;
  content: { title: string; src: string }[];
}

const TitleCards = ({ title, content }: TitleCardsProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-secondaryBlue font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2 perspective-500">
        {content.map((item) => (
          <TitleCard title={item.title} src={item.src} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
