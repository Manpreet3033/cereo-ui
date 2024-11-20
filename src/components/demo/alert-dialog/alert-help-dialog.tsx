import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface HelpDialogType {
  content: string;
}

const HelpDialog = ({ content }: HelpDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger
      asChild
      className="dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <Button variant="outline">Get Help</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:bg-black dark:border-gray-800">
      <AlertDialogHeader>
        <AlertDialogTitle>Help & Support</AlertDialogTitle>
      </AlertDialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <AlertDialogDescription>{content}</AlertDialogDescription>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction>Close</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default HelpDialog;
