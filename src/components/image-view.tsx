import { useNavigate } from "react-router-dom";

interface ImageViewProps {
  src: string;
  text: string;
  activeIndex: number;
  index: number;
  to: string;
}

const ImageView: React.FunctionComponent<ImageViewProps> = ({
  src,
  text,
  activeIndex,
  index,
  to,
}) => {
  const isActive = activeIndex == index;
  const navigate = useNavigate();
  const onNavigate = (href: string) => {
    navigate(href);
  };

  // w-auto md:w-full md:h-[700px] h-350px]
  return (
    <div className="w-full relative">
      {isActive && (
        <div
          data-aos="zoom-in-up"
          className="font-semibold space-y-3 bottom-5 absolute xl:bottom-16 md:left-20  max-w-[60%] xl:left-32 left-10 "
        >
          {/* <p className="text-white xl:text-6xl text-3xl font-bold">{text}</p> */}
          <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl  text-white xl:text-6xl font-bold">
            {text}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate(to)}
              className="cursor-pointer rounded-lg uppercase text-xs  sm:text-sm transition duration-150 px-2 sm:px-4 py-1 sm:py-2 text-white bg-activeBlue hover:bg-secondaryBlue"
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate("/contact")}
              className="cursor-pointer rounded-lg uppercase text-xs sm:text-sm transition duration-150 px-2 sm:px-4 py-1 sm:py-2 text-white hover:bg-activeBlue bg-transparent border "
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
      <img
        // className="h-[300px] w-full lg:h-[600px] xl:h-[700px]  "
        className=" h-60 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[42rem] w-full bg-cover"
        src={src}
        alt=""
      />
    </div>
  );
};

export default ImageView;
