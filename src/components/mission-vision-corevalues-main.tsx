import { mission_text, vision_text } from "../constansts";
import ContentBox from "./content-box";

const MissionVisionCoreValuesMain = () => {
  return (
    <>
      <ContentBox title="Mission" content={mission_text} />
      <ContentBox title="Vision" content={vision_text} />
      <div className="mt-8 space-y-3">
        <h1 className="text-center text-activeBlue text-2xl font-semibold">
          Core Values
        </h1>
        <div>
          <p className="text-gray-600">
            <span className="text-secondaryBlue font-semibold">Work: </span>
            We put forward work opportunities.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue  font-semibold">
              Employability:{" "}
            </span>
            We provide long-term careers by developing skills that allow our
            people to be employable, today and tomorrow.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue  font-semibold">
              Aspirations:{" "}
            </span>
            We understand our people’s aspirations and give them the right
            direction towards achieving their goals.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue font-semibold">Values: </span>
            We ensure that our people deliver value through value-oriented
            behaviour.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue  font-semibold">
              Integrity:{" "}
            </span>
            We make certain that integrity prevails at all levels under all
            circumstances.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue font-semibold">Nurture: </span>
            We care for and nurture our people, and that compassion is reflected
            in all endeavours.
          </p>
          <p className="text-gray-600">
            <span className="text-secondaryBlue font-semibold">
              Sustainbility:{" "}
            </span>
            We believe in building sustainability for now, and for the future,
            through a holistic process which is interconnected and
            interdependent.
          </p>
        </div>
      </div>
    </>
  );
};

export default MissionVisionCoreValuesMain;
