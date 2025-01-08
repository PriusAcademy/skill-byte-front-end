// import setItem from "../actions/setItem";

import { Button } from "../components/ui/button";
import {
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../components/ui/dialog";
// import { useDate } from "../hooks/get-time";
import useTestModal from "../hooks/test-start-modal-store";
import { cn } from "../lib/utils";
// import { getDurationInMinutesAndSeconds } from "../utils/utils";
// import CustomModal from "./custom-modal";
// import { format } from "date-fns";

const TestModalStart = () => {
  const testModal = useTestModal();

  // const getDateString = (date: Date) => {
  //   if (isNaN(date?.getTime()) == false) {
  //     return format(new Date(date).toISOString(), "p");
  //   }
  // };

  // const { today } = useDate();

  // const startTime = new Date(testModal.startTime!);
  // const endTime = new Date(testModal.endTime!);

  // const start = getDateString(startTime);
  // const end = getDateString(endTime);

  // const starting = getDurationInMinutesAndSeconds(today, startTime);
  // const ending = getDurationInMinutesAndSeconds(today, endTime);
  // const startingText = `Test Starts In ${starting.formattedDuration}`;
  // const endingText = `Test Ends In ${ending.formattedDuration}`;

  // const description =
  //   ending.minutes < 0 || ending.seconds < 0
  //     ? "Test closed. The allotted time has ended."
  //     : `Test Starts at ${start} and Ends at ${end}`;

  // const onSubmit = () => {
  //   setItem("endTime", endTime);
  //   setItem("startTime", startTime);
  //   window.location.href = testModal.href;
  // };

  // const actionTitle =
  //   (starting.minutes > 0 || starting.seconds > 0) && startingText
  //     ? "Start"
  //     : "Continue";

  const onSubmit = (href: string) => {
    window.location.href = href;
  };

  return (
    // <CustomModal
    //   actionTitle={actionTitle}
    //   disabled={ending.minutes < 0 || ending.seconds < 0}
    //   onClose={testModal.onClose}
    //   open={testModal.open}
    //   onSubmit={onSubmit}
    //   setOpen={testModal.onClose}
    //   title="Ready to Begin the Test?"
    //   variant={"secondary"}
    //   description={description}
    //   danger
    // >
    //   <p className="text-red-600 font-semibold text-sm">
    //     {(starting.minutes > 0 || starting.seconds > 0) && startingText}
    //   </p>
    //   <p className="text-red-600 font-semibold text-sm">
    //     {(ending.minutes > 0 || ending.seconds > 0) &&
    //       (starting.minutes < 0 || starting.seconds < 0) &&
    //       endingText}
    //   </p>
    // </CustomModal>

    <Dialog open={testModal.open} onOpenChange={testModal.onClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogContent className="bg-gray-200">
          <DialogTitle className="font-semibold text-secondaryBlue text-2xl">
            {testModal.title}
          </DialogTitle>
          <DialogDescription className={cn("text-md font-semibold")}>
            {"Start test"}
          </DialogDescription>
          <DialogFooter>
            <div className="flex sm:flex-row flex-col justify-end sm:gap-2">
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => onSubmit(testModal.href)}
              >
                {testModal.actionString}
              </Button>
              <Button
                variant={"destructive"}
                className="mt-2"
                onClick={testModal.onClose}
              >
                Close
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default TestModalStart;
