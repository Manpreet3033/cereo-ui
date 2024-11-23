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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectionDialogType {
  languages: { code: string; name: string }[];
  onSelect: (languageCode: string) => void;
}
const LanguageSelectionDialog = ({
  languages = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
    { code: "fr", name: "French" },
    { code: "it", name: "Italian" },
  ],
  onSelect = () => {},
}: LanguageSelectionDialogType) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    if (selectedLanguage) {
      onSelect(selectedLanguage);
      setIsOpen(false);
      setSelectedLanguage("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Change Language
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Select Language</AlertDialogTitle>
          <AlertDialogDescription>
            Choose your preferred language for the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Select onValueChange={setSelectedLanguage}>
          <SelectTrigger className="dark:bg-black dark:border-gray-800">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="dark:bg-black dark:border-gray-800 ">
            {languages.map((lang) => (
              <SelectItem
                key={lang.code}
                value={lang.code}
                className="dark:hover:bg-gray-900"
              >
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSelect}
            disabled={!selectedLanguage}
          >
            Apply
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LanguageSelectionDialog;
