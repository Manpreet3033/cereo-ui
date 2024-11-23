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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface NewsletterSubscriptionDialogType {
  onSubscribe: (email: string) => void;
}
const NewsletterDialog = ({
  onSubscribe = (email) => {},
}: NewsletterSubscriptionDialogType) => {
  const [email, setEmail] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubscribe = () => {
    if (email && consent) {
      onSubscribe(email);
      setIsOpen(false);
      setEmail("");
      setConsent(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Subscribe to Newsletter
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:bg-black dark:border-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Subscribe to Our Newsletter</AlertDialogTitle>
          <AlertDialogDescription>
            Stay updated with our latest news and offers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark:bg-black dark:border-gray-800"
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label htmlFor="consent">I agree to receive marketing emails</Label>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubscribe}
            disabled={!email || !consent}
          >
            Subscribe
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewsletterDialog;
