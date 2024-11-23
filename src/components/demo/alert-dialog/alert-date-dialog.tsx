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
import React from "react";
import { Calendar } from "@/components/ui/calendar";

interface DatePickerDialogType {
  onSelect: (date: Date) => void;
}
const DatePickerDialog = ({ onSelect }: DatePickerDialogType) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    if (date) {
      //   onSelect(date);
      setIsOpen(false);
      setDate(undefined);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Select Date
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Choose a Date</AlertDialogTitle>
          <AlertDialogDescription>
            Select a date for your appointment or event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border dark:border-gray-800 dark:bg-black"
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSelect} disabled={!date}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DatePickerDialog;
