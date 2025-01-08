interface ContentBeforeTest {
  text: string;
}

const ContentBeforeTest = ({ text }: ContentBeforeTest) => {
  return (
    <div className=" flex flex-col my-20 sm:my-0 gap-8 items-center justify-center">
      <h2 className="text-4xl [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] font-semibold lg:text-5xl xl:text-6xl text-secondaryBlue text-center">
        Test Will Starts in
      </h2>
      <div className="sm:text-7xl flex-row items-center flex gap-6 lg:text-8xl text-6xl">
        <span className="bg-white [text-shadow:_0_2px_4px_#000] w-40 h-40 sm:w-60 sm:h-60 inline-flex items-center justify-center  rounded-xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ContentBeforeTest;
