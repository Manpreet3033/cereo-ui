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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

interface ColorThemeSelectionDialogType {
  themes: { value: string; label: string }[];
  onSelect: (theme: string) => void;
}
const ColorThemeDialog = ({
  themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ],
  onSelect = () => {},
}: ColorThemeSelectionDialogType) => {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState(theme ?? "light");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    setTheme(selectedTheme);
    setIsOpen(false);
    setSelectedTheme(selectedTheme);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Choose Color Theme
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Select Color Theme</AlertDialogTitle>
          <AlertDialogDescription>
            Choose a color theme for the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup defaultValue={theme} onValueChange={setSelectedTheme}>
          {themes.map((theme) => (
            <div key={theme.value} className="flex items-center space-x-2">
              <RadioGroupItem value={theme.value} id={theme.value} />
              <Label htmlFor={theme.value}>{theme.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSelect} disabled={!selectedTheme}>
            Apply Theme
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ColorThemeDialog;
