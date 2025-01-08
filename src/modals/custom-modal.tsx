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
import { cn } from "../lib/utils";

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
  danger?: boolean;
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
  danger,
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
          <DialogDescription
            className={cn("text-md font-semibold", danger && "text-red-500")}
          >
            {description}
          </DialogDescription>
          {children}
          <DialogFooter>
            <Button className="mt-2" onClick={onClose} disabled={disabled}>
              Close
            </Button>
            <Button
              className="mt-2 focus:none"
              variant={variant}
              onClick={onSubmit}
              disabled={disabled}
            >
              {actionTitle}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CustomModal;
