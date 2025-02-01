import { useEffect, useState } from "react";
import Container from "../../components/container";
import { getUser } from "../../utils/isAuthorized";
import { API } from "../../utils/connection";
import { Skeleton } from "../../components/ui/skeleton";
import SubTopicBundle from "./sub-topic-bundle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

type TestProgress = {
  maxMarks: number;
  totalQuestions: number;
  completed: boolean;
};

type SubTopics =
  | {
      id: string;
      name: string;
      topicId: string;
      testStartTime: string | null;
      testEndTime: string | null;
      questionCount: number;
      testProgress: TestProgress;
    }[]
  | undefined;
type Topic = {
  name: string;
  id: string;
  subTopics: SubTopics;
};

type Assignment = {
  start: number;
  end: number;
  startTime: string;
  endTime: string;
  description: string;
  topic: Topic;
};

const AssignMentContent = () => {
  const user = getUser();
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSubTopics = async () => {
      try {
        setLoading(true);
        const res = await API.get<Assignment[]>(
          `/learner/673310829906f907a071aa41/topic/${user.code}?userId=${user.id}`
        );
        console.log(res.data);
        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSubTopics();
  }, [user.code, user.id]);

  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div className="text-xl text-primary md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          Assignments
        </div>
        <div className="flex flex-col gap-8">
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
          {assignments.map((assignment, mainIndex) => (
            <Accordion type="multiple">
              <AccordionItem
                className="bg-sky-400 border-none"
                value={`${mainIndex}`}
              >
                <AccordionTrigger className="text-xl w-full text-white p-2 hover:no-underline">
                  {`${mainIndex + 1}. `} {assignment.topic.name}
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  {assignment.topic.subTopics?.map((item, index) => (
                    <SubTopicBundle
                      assignmentNumber={`${mainIndex + 1}.${index + 1}`}
                      key={item.id}
                      startTime={
                        (item.testStartTime && new Date(item.testStartTime)) ||
                        undefined
                      }
                      endTime={
                        (item.testEndTime && new Date(item.testEndTime)) ||
                        undefined
                      }
                      id={item.id}
                      marks={item.testProgress?.maxMarks || 0}
                      completed={item.testProgress?.completed || false}
                      no_questions={item.questionCount}
                      title={item.name}
                      subTopicId={item.id}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AssignMentContent;
