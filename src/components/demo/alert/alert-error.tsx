import { ShadAlert } from "@/components/common/shad-alert";
import { Button } from "@/components/ui/button";
import React from "react";

const AlertError = () => {
  return (
    <ShadAlert
      variant="error"
      title="Error"
      description="An error occurred. Please try again."
      closable
      action={
        <Button variant="destructive" size="sm">
          Retry
        </Button>
      }
      animated
    />
  );
};

export default AlertError;
