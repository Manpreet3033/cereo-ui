import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Minus } from "lucide-react";
import React from "react";
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

interface TwoFactorAuthDialogType {
  onVerify: (code: string) => void;
}

interface OTPType {
  code: string;
  setCode: (code: string) => void;
}
const OTP = ({ code, setCode }: OTPType) => {
  return (
    <div className="space-y-2">
      <OTPInput
        id="input-45"
        containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
        maxLength={6}
        value={code}
        onChange={setCode}
        render={({ slots }) => (
          <>
            <div className="flex">
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>

            <div className="text-muted-foreground/80">
              <Minus size={16} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative flex size-9 items-center justify-center border-y border-e border-input dark:bg-black dark:border-gray-800 font-medium text-foreground shadow-sm shadow-black/5 ring-offset-background transition-all first:rounded-s-lg first:border-s last:rounded-e-lg",
        {
          "z-10 border border-ring ring-2 ring-ring/30 ring-offset-2":
            props.isActive,
        }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}

const TwoFactorAuthDialog = ({
  onVerify = (code) => {},
}: TwoFactorAuthDialogType) => {
  const [code, setCode] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleVerify = () => {
    if (code.length === 6) {
      onVerify(code);
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
          Verify 2FA
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="dark:border-gray-800 dark:bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Two-Factor Authentication</AlertDialogTitle>
          <AlertDialogDescription>
            Enter the 6-digit code from your authenticator app.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <OTP code={code} setCode={setCode} />
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleVerify}
            disabled={code.length !== 6}
          >
            Verify
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TwoFactorAuthDialog;
