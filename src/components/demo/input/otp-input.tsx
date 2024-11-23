"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Minus } from "lucide-react";
import React from "react";

interface OTPType {
  code: string;
  setCode: (code: string) => void;
}
export default function OTP({ code, setCode }: OTPType) {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-45">OTP input double</Label>
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
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative flex size-9 items-center justify-center border-y border-e border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 ring-offset-background transition-all first:rounded-s-lg first:border-s last:rounded-e-lg",
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
