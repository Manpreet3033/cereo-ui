import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProgressDialogType {
  progress: number;
}
const ProgressDialog = ({ progress }: ProgressDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger
      asChild
      className="dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <Button variant="outline">Show Progress</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:bg-black dark:border-gray-800">
      <AlertDialogHeader>
        <AlertDialogTitle>Operation in Progress</AlertDialogTitle>
        <AlertDialogDescription>
          Please wait while we process your request.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <Progress value={progress ?? 65} className="w-full dark:bg-gray-700" />
      <AlertDialogFooter>
        <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
          Cancel
        </AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default ProgressDialog;
