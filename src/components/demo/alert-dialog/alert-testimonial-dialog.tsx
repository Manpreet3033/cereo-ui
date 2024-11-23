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
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

interface TestimonialSubmissionDialogType {
  onSubmit: (testimonial: {
    name: string;
    rating: number;
    testimonial: string;
  }) => void;
}
const TestimonialDialog = ({ onSubmit }: TestimonialSubmissionDialogType) => {
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [testimonial, setTestimonial] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = () => {
    // onSubmit({ name, rating, testimonial });
    setIsOpen(false);
    setName("");
    setRating(5);
    setTestimonial("");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Submit Testimonial
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Submit Your Testimonial</AlertDialogTitle>
          <AlertDialogDescription>
            We appreciate your feedback! Please share your experience with us.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 dark:bg-black dark:border-gray-800"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Slider
              id="rating"
              min={1}
              max={5}
              step={1}
              value={[rating]}
              onValueChange={(value) => setRating(value[0])}
              className="col-span-3 dark:bg-gray-900"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="testimonial" className="text-right">
              Testimonial
            </Label>
            <Textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              className="col-span-3 dark:bg-black dark:border-gray-800"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TestimonialDialog;
