import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface NotificationDialogType {
  title: string;
  message: string;
}

const NotificationDialog = ({ title, message }: NotificationDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="outline"
        className="dark:border-gray-800 dark:hover:bg-gray-900"
      >
        Show Notification
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
      <AlertDialogHeader>
        <AlertDialogTitle>{title ?? "Message Title"}</AlertDialogTitle>
        <AlertDialogDescription>
          {message ?? "Notification Message"}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Dismiss</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default NotificationDialog;
