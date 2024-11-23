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
import { Share2 } from "lucide-react";

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
        Share
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
const ShareDialog = () => (
  <CustomIconDialog
    icon={Share2}
    title="Share Content"
    description="Choose how you'd like to share this content."
    onConfirm={() => console.log("Sharing options displayed")}
  />
);

export default ShareDialog;
