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
import { Checkbox } from "@/components/ui/checkbox";

interface SettingsDialogType {
  settings: Record<string, boolean>;
  onSave: (newSettings: Record<string, boolean>) => void;
}
const SettingsDialog = ({ settings, onSave }: SettingsDialogType) => {
  const [localSettings, setLocalSettings] = React.useState<
    Record<string, boolean>
  >(settings ?? { notifications: true, darkMode: false, autoSave: true });
  const handleCheckedChange = (key: string, checked: boolean) => {
    setLocalSettings((prev) => ({ ...prev, [key]: checked }));
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Open Settings
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Settings</AlertDialogTitle>
          <AlertDialogDescription>
            Adjust your preferences below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(localSettings).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={value}
                onCheckedChange={(checked) =>
                  handleCheckedChange(key, checked as boolean)
                }
              />
              <Label htmlFor={key}>{key}</Label>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="dark:border-gray-800 dark:hover:bg-gray-900">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              onSave != null
                ? onSave(localSettings)
                : console.log(localSettings)
            }
          >
            Save Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SettingsDialog;
