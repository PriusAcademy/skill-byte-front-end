interface ContentBoxProps {
  title: string;
  content: string[];
}

const ContentBox = ({ title, content }: ContentBoxProps) => {
  return (
    <div className="mt-8 space-y-3">
      <h1 className="text-center text-activeBlue font-semibold text-2xl">
        {title}
      </h1>
      {content.map((item, index) => (
        <p className="indent-10 text-gray-600" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default ContentBox;
