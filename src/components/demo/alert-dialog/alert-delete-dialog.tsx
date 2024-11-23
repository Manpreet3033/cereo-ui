import { Button } from "@/components/ui/button";
import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

interface CustomIconDialogType {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  onConfirm: () => void;
}

export const CustomIconDialog = ({
  icon: Icon,
  title,
  description,
  onConfirm,
}: CustomIconDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="outline"
        className="dark:border-gray-800 dark:hover:bg-gray-900"
      >
        Open Delete Account Dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:bg-black dark:border-gray-800">
      <AlertDialogHeader>
        <div className="flex items-center space-x-2">
          <Icon className="h-6 w-6" />
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </div>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
const DeleteAccountDialog = () => (
  <CustomIconDialog
    icon={Trash2}
    title="Delete Account"
    description="Are you sure you want to delete your account? This action cannot be undone."
    onConfirm={() => console.log("Account deleted")}
  />
);

export default DeleteAccountDialog;
