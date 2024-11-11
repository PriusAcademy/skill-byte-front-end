import { useState } from "react";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight, LucideIcon, X } from "lucide-react";
import useGalleryModal from "../hooks/gallery-modal-store";

interface ActionIconProps {
  onAction: () => void;
  className: string;
  Icon: LucideIcon;
}
const ActionIcon = ({ onAction, className, Icon }: ActionIconProps) => {
  return (
    <span
      onClick={onAction}
      className={cn("absolute cursor-pointer text-black", className)}
    >
      <Icon />
    </span>
  );
};

const GalleryModal = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelectIndex = (id: number) => {
    setSelectedIndex(id);
  };

  const galleryModal = useGalleryModal();
  if (!galleryModal.open) {
    return null;
  }

  const onClose = () => {
    galleryModal.onClose();
  };

  const onNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryModal.data.length);
  };
  const onPrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + galleryModal.data.length) % galleryModal.data.length
    );
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="200"
      className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div className="absolute flex flex-col gap-6  ">
        <div className="rounded-sm  relative">
          <ActionIcon
            onAction={onClose}
            Icon={X}
            className="right-2 top-2 text-white"
          />
          <ActionIcon
            onAction={onNext}
            Icon={ChevronRight}
            className="right-2 top-[50%] transition duration-200 text-white sm:-right-16 sm:p-2 sm:hover:opacity-50 sm:bg-black sm:hover:text-black sm:hover:bg-white rounded-full "
          />
          <ActionIcon
            onAction={onPrev}
            Icon={ChevronLeft}
            className="left-2 top-[50%] transition duration-200 text-white sm:-left-16 sm:p-2 sm:hover:opacity-50 sm:bg-black sm:hover:text-black sm:hover:bg-white rounded-full "
          />
          <img
            src={galleryModal.data[selectedIndex]}
            className="h-[350px] w-[500px] lg:w-[800px] lg:h-[600px] bg-cover "
            alt=""
          />
        </div>
        <div className="flex gap-1 w-full justify-center overflow-x-auto">
          {galleryModal.data.map((item, index) => (
            <div
              onClick={() => onSelectIndex(index)}
              className={cn(
                "bg-white cursor-pointer flex items-center justify-center border-2 ",
                selectedIndex != index ? "border-black" : "border-transparent"
              )}
              key={index}
            >
              <img className="w-20 h-20" src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
