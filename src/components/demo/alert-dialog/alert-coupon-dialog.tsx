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

interface CouponCodeDialogType {
  onApply: (code: string) => void;
}
const CouponCodeDialog = ({ onApply }: CouponCodeDialogType) => {
  const [code, setCode] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleApply = () => {
    if (code) {
      //   onApply(code);
      setIsOpen(false);
      setCode("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:border-gray-800 dark:hover:bg-gray-900"
        >
          Apply Coupon
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Apply Coupon Code</AlertDialogTitle>
          <AlertDialogDescription>
            Enter a valid coupon code to get a discount.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          type="text"
          placeholder="Enter coupon code"
          className="dark:border-gray-800 dark:bg-black"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleApply} disabled={!code}>
            Apply Coupon
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CouponCodeDialog;
