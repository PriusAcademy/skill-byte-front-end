import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  actionTitle: string;
  disabled: boolean;
  description?: string;
  variant?:
    | "destructive"
    | "default"
    | "ghost"
    | "secondary"
    | "link"
    | "outline"
    | null
    | undefined;
}

const CustomModal = ({
  open,
  setOpen,
  children,
  title,
  actionTitle,
  onClose,
  onSubmit,
  disabled,
  variant = "default",
  description,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-transparent" />
        <DialogContent className="bg-gray-200">
          <DialogTitle className="font-semibold text-secondaryBlue text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription className="text-md">
            {description}
          </DialogDescription>
          {children}
          <DialogFooter>
            <Button onClick={onClose} disabled={disabled}>
              Close
            </Button>
            <Button variant={variant} onClick={onSubmit} disabled={disabled}>
              {actionTitle}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CustomModal;
