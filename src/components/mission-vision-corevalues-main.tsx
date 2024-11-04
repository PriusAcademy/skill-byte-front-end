import { Check } from "lucide-react";
import {
  coreValuesPath,
  coreValueText,
  mission_text,
  missionPath,
  vision_text,
  visionPath,
} from "../constansts";
import MediaCard from "../pages/about-us/components/about-us-media-card";

const MissionVisionCoreValuesMain = () => {
  return (
    <div className="space-y-8">
      <MediaCard src={missionPath} content={mission_text} title="Misison" />
      <MediaCard src={visionPath} content={vision_text} title="Vision" />
      <div className="mt-8 space-y-3">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src={coreValuesPath} className="w-40 h-40 rounded-full" alt="" />
          <div className="flex flex-col gap-y-3 justify-center">
            <h2 className="text-secondaryBlue text-center md:text-start text-2xl font-semibold">
              Core Values:
            </h2>
            {coreValueText.map((item, index) => (
              <div key={index} className="flex gap-x-2">
                <div>
                  <Check className="text-activeBlue" />
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-600">
                    {item.title}
                  </span>
                  : {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCoreValuesMain;
