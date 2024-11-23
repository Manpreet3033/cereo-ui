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
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface FeedbackDialogType {
  onSubmit: (feedback: string) => void;
}
const FeedbackDialog = ({ onSubmit }: FeedbackDialogType) => {
  const [feedback, setFeedback] = React.useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Give Feedback
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Provide Feedback</AlertDialogTitle>
          <AlertDialogDescription>
            We value your opinion. Please share your thoughts with us.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here"
          className="dark:bg-gray-900 dark:border-gray-800"
        />
        <AlertDialogFooter>
          <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              onSubmit != null ? onSubmit(feedback) : console.log(feedback)
            }
          >
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FeedbackDialog;
