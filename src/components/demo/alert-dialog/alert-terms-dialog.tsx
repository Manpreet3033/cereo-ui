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

interface TermsDialogType {
  terms: string;
  onAccept: () => void;
}
const TermsDialog = ({ terms, onAccept }: TermsDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="outline"
        className="dark:border-gray-800 dark:hover:bg-gray-900"
      >
        View Terms
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:bg-black dark:border-gray-800">
      <AlertDialogHeader>
        <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
      </AlertDialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <AlertDialogDescription>
          {terms ?? "Your Terms and Condition Here..."}
        </AlertDialogDescription>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
          Decline
        </AlertDialogCancel>
        <AlertDialogAction onClick={onAccept}>Accept</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default TermsDialog;
