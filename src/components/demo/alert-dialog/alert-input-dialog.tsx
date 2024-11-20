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
import { Input } from "@/components/ui/input";
import React from "react";

interface InputDialogType {
  onSubmit: (input: string) => void;
}

const InputDialog = ({ onSubmit }: InputDialogType) => {
  const [input, setInput] = React.useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        className="dark:border-gray-800 dark:hover:bg-gray-900"
      >
        <Button variant="outline">Open Input Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Enter Information</AlertDialogTitle>
          <AlertDialogDescription>
            Please provide the required information below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text here"
          className="dark:bg-black dark:border-gray-800"
        />
        <AlertDialogFooter>
          <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(input)}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InputDialog;
