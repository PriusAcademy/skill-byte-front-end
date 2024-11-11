import GalleryCard from "../components/gallery-card";
import { gallery_dscet, galleryBackgroundPath } from "../constansts";
import useGalleryModal from "../hooks/gallery-modal-store";

const GalleryPage = () => {
  const galleryModal = useGalleryModal();
  const onGalleryOpen = () => {
    galleryModal.onOpen(gallery_dscet);
  };
  return (
    <div className="w-full">
      <img
        className=" h-60 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[42rem] w-full bg-cover"
        src={galleryBackgroundPath}
        alt=""
      />
      <div className="p-16 mx-auto max-w-[1400px] space-y-12 ">
        <h1 className="text-center font-bold text-4xl text-secondaryBlue">
          Gallery
        </h1>
        <div className="w-full flex gap-12 flex-wrap items-center sm:justify-start justify-center">
          <GalleryCard
            title="Dhanalakshmi Srinivasan College of Engineering and Technology"
            src={gallery_dscet[0]}
            onClick={onGalleryOpen}
            date="November 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
