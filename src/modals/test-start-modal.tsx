import useTestModal from "../hooks/test-start-modal-store";
import CustomModal from "./custom-modal";

const TestModalStart = () => {
  const testModal = useTestModal();
  const onSubmit = () => {
    window.location.href = testModal.href;
  };

  return (
    <CustomModal
      actionTitle="Start"
      disabled={false}
      onClose={testModal.onClose}
      open={testModal.open}
      onSubmit={onSubmit}
      setOpen={testModal.onClose}
      title="Ready to Begin the Test?"
      variant={"outline"}
      description="Start the test when you're ready."
    />
  );
};

export default TestModalStart;
