import Container from "../components/container";
import EventTable from "../components/event-table";
import { eventsBackgroundPath } from "../constansts";
import { event_data } from "../data/event-data";

const EventsPage = () => {
  return (
    <div>
      <img
        className=" h-60 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[42rem] w-full bg-cover"
        src={eventsBackgroundPath}
        alt=""
      />
      <Container>
        <div className="flex flex-col gap-y-6 my-4">
          <h1 className="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold text-secondaryBlue">
            Skill-Byte Events
          </h1>
          <EventTable events={event_data} />
        </div>
      </Container>
    </div>
  );
};

export default EventsPage;
