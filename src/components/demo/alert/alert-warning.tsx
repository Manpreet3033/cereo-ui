import { ShadAlert } from "@/components/common/shad-alert";
import { Button } from "@/components/ui/button";
import React from "react";

const AlertWarning = () => {
  return (
    <ShadAlert
      variant="warning"
      title="Warning"
      description="Please be cautious about this action."
      size="lg"
      action={
        <Button variant="outline" size="sm">
          Acknowledge
        </Button>
      }
      animated
    />
  );
};

export default AlertWarning;
