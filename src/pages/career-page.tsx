import CareerForm from "../components/career-form";
import { careerBackgroundPath } from "../constansts";

const CareerPage = () => {
  return (
    <div>
      <img
        className=" h-60 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[42rem] w-full bg-cover"
        src={careerBackgroundPath}
        alt=""
      />
      <CareerForm />
    </div>
  );
};

export default CareerPage;
