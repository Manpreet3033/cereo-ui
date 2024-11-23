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
import { Input } from "@/components/ui/input";

interface ImageUploadDialogType {
  onUpload: (file: File) => void;
}
const ImageUploadDialog = ({ onUpload }: ImageUploadDialogType) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleUpload = () => {
    if (file) {
      // onUpload(file);
      setIsOpen(false);
      setFile(null);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Upload Image
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Upload an Image</AlertDialogTitle>
          <AlertDialogDescription>
            Choose an image file to upload. Supported formats: JPG, PNG, GIF.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="dark:bg-black dark:border-gray-800"
        />
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleUpload} disabled={!file}>
            Upload
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ImageUploadDialog;
