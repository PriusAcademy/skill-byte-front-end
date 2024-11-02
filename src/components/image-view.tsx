interface ImageViewProps {
  src: string;
  text: string;
  activeIndex: number;
  index: number;
}

const ImageView: React.FunctionComponent<ImageViewProps> = ({
  src,
  text,
  activeIndex,
  index,
}) => {
  const isActive = activeIndex == index;
  // w-auto md:w-full md:h-[700px] h-350px]
  return (
    <div className="w-full relative">
      {isActive && (
        <div
          data-aos="zoom-in-up"
          className="font-semibold  text-xl absolute bottom-10 w-96 left-8"
        >
          {text}
        </div>
      )}
      <img className="h-[500px] lg:h-[700px] w-[1900px] " src={src} alt="" />
    </div>
  );
};

export default ImageView;
