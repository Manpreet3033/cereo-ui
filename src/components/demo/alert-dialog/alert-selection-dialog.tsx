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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const sampleOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

interface SelectionDialogType {
  options: string[];
  onSelect: () => void;
}

const SelectionDialog = ({
  options = sampleOptions,
  onSelect,
}: SelectionDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger
      asChild
      className="dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <Button variant="outline">Make Selection</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:bg-black dark:border-gray-800">
      <AlertDialogHeader>
        <AlertDialogTitle>Select an Option</AlertDialogTitle>
        <AlertDialogDescription>
          Please choose one of the following options.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <RadioGroup defaultValue="option1">
        <div className="flex items-center">
          <RadioGroupItem value="option1" id="option1" />
          <p>Option1</p>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="option2" id="option2" />
          <p>Option2</p>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="option3" id="option3" />
          <p>Option3</p>
        </div>
      </RadioGroup>
      <AlertDialogFooter>
        <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction onClick={onSelect}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default SelectionDialog;
