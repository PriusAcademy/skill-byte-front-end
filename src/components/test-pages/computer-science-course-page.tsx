import { programmingLanguages } from "../../constansts";
import Container from "../container";

const ComputerScienceCoursePage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-semibold text-center">
          Courses for Computer Science Students
        </h1>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold text-secondaryBlue">
            Programming Languages
          </h1>
          <div className="flex gap-8 flex-wrap ">
            {programmingLanguages.map((item) => (
              <div className="">
                <div
                  draggable={false}
                  className="flex  flex-col p-3 border-gray-300 preserve-3d items-center gap-3 transition hover:translate-z-10 duration-150 border rounded-sm hover:shadow-lg cursor-pointer"
                  key={item.src}
                >
                  <img src={item.src} className="w-16 h-16" alt="" />
                  <h1 className="text-center ">{item.title}</h1>
                </div>
                {/* <div
                  className={`
                    border p-3 border-gray-300 rounded-lg translate`}
                  key={item.src}
                >
                  <img src={item.src} className="w-16 h-16" alt="" />
                  <h1 className="text-center ">{item.title}</h1>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComputerScienceCoursePage;
