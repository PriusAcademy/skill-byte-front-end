import ContainerWithBackground from "../../components/container-with-background";
import Header from "../../components/header";
import TitleCard from "../../components/title-card";
import { campusDrive } from "../../constansts";

const CampusDrivePage = () => {
  return (
    <ContainerWithBackground>
      <>
        <Header title="Campus Drive Courses for Students" />
        <div className="bg-white shadow-md w-full space-y-4 rounded-lg mt-8 p-4">
          {campusDrive.map((item, index) => (
            <TitleCard
              major=""
              id=""
              src={item.src}
              title={item.title}
              key={index}
              className="p-3"
              iconSize="h-16 w-16"
            />
          ))}
        </div>
      </>
    </ContainerWithBackground>
  );
};

export default CampusDrivePage;
