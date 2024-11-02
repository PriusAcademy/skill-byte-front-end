import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "swiper/css/pagination";

import { imageCaptions, imagePaths } from "../constansts";
import ImageView from "./image-view";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Swipe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Refresh AOS on active index change
    AOS.refresh();
  }, [activeIndex]);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setActiveIndex(swiper.realIndex);
    AOS.refresh();
  };

  return (
    <Swiper
      loop
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
    >
      {imagePaths.map((src, index) => (
        <SwiperSlide key={src}>
          <ImageView
            index={index}
            activeIndex={activeIndex}
            text={imageCaptions[index]}
            src={src}
            key={src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipe;
