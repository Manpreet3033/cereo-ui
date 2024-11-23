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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface PrivacySettingsDialogType {
  settings: { [key: string]: boolean };
  onSave: (settings: { [key: string]: boolean }) => void;
}
const PrivacySettingsDialog = ({
  settings = {
    "Allow Cookies": true,
    "Share Data with Partners": false,
    "Receive Marketing Emails": true,
  },
  onSave,
}: PrivacySettingsDialogType) => {
  const [localSettings, setLocalSettings] = React.useState(settings);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSave = () => {
    // onSave(localSettings);
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Privacy Settings
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Privacy Settings</AlertDialogTitle>
          <AlertDialogDescription>
            Manage your privacy preferences.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(localSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key}>{key}</Label>
              <Switch
                id={key}
                checked={value as boolean}
                onCheckedChange={(checked) =>
                  setLocalSettings((prev) => ({ ...prev, [key]: checked }))
                }
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>
            Save Settings
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PrivacySettingsDialog;
