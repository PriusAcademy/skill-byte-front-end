import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ open, setOpen, children, title }: ModalProps) => {
  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogContent className="bg-gray-200">
          <DialogDescription></DialogDescription>
          <DialogTitle className="text-2xl font-bold text-center text-secondaryBlue">
            {title}
          </DialogTitle>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default Modal;
