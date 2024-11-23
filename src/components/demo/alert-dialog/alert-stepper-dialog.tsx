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
import { Progress } from "@/components/ui/progress";

interface FeatureTourDialogType {
  features: { title: string; description: string }[];
  onComplete: () => void;
}
const FeatureTourDialog = ({
  features = [
    { title: "Dashboard", description: "This is your main dashboard." },
    { title: "Profile", description: "Here you can edit your profile." },
    {
      title: "Settings",
      description: "Adjust your account settings here.",
    },
  ],
  onComplete,
}: FeatureTourDialogType) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleComplete = () => {
    // onComplete();
    setIsOpen(false);
    setCurrentStep(0);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Start Feature Tour
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>{features[currentStep]?.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {features[currentStep]?.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Progress
          value={((currentStep + 1) / features.length) * 100}
          className="dark:bg-gray-900 dark:border-gray-800"
        />
        <AlertDialogFooter>
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Previous
            </Button>
          )}
          {currentStep < features.length - 1 ? (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>
              Next
            </Button>
          ) : (
            <AlertDialogAction onClick={handleComplete}>
              Finish Tour
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FeatureTourDialog;
