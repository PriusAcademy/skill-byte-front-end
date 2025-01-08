import { useEffect, useState } from "react";
import Container from "../../components/container";
import { getUser } from "../../utils/isAuthorized";
import { API } from "../../utils/connection";
import { Skeleton } from "../../components/ui/skeleton";
// import SubTopicBundle from "./sub-topic-bundle";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../components/ui/accordion";

type SubTopic =
  | {
      id: string;
      name: string;
      topicId: string;
      testStartTime: string | null;
      testEndTime: string | null;
    }[]
  | undefined;

const AssignMentContent = () => {
  const user = getUser();
  const [subTopics, setSubTopics] = useState<SubTopic>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSubTopics = async () => {
      try {
        setLoading(true);
        const res = await API.get(
          `/learner/673310829906f907a071aa41/topic/${user.code}`
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSubTopics();
  }, [user.code]);
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div className="text-xl text-primary md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          Assignments
        </div>
        <div>
          {loading && <Skeleton className="h-[100px] bg-slate-700 w-full" />}
          {/* {subTopics?.map((item) => (
            <SubTopicBundle
              key={item.id}
              startTime={
                (item.testStartTime && new Date(item.testStartTime)) ||
                undefined
              }
              endTime={
                (item.testEndTime && new Date(item.testEndTime)) || undefined
              }
              id={item.id}
              no_questions={10}
              title={item.name}
              subTopicId={item.id}
            />
          ))} */}

          {/* <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
    </Container>
  );
};

export default AssignMentContent;
