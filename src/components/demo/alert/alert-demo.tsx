import { ShadAlert } from "@/components/common/shad-alert";
import { Button } from "@/components/ui/button";
import React from "react";

const AlertDemo = () => {
  return (
    <ShadAlert
      variant="warning"
      title="Warning"
      description="Please be cautious about this action."
      size="md"
      action={
        <Button className="bg-black dark:bg-black dark:text-white">
          Acknowledge
        </Button>
      }
      animated
    />
  );
};

export default AlertDemo;
