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

interface ErrorDialogType {
  message: string;
  onRetry: () => void;
}

const ErrorDialog = ({ message, onRetry }: ErrorDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="outline"
        className="dark:border-gray-800 dark:hover:bg-gray-900"
      >
        Show Error
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
      <AlertDialogHeader>
        <AlertDialogTitle>Error Occurred</AlertDialogTitle>
        <AlertDialogDescription>{message}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
          Close
        </AlertDialogCancel>
        <AlertDialogAction onClick={onRetry}>Retry</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default ErrorDialog;
