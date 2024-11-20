import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertSecondary = () => {
  return (
    <ShadAlert
      variant="secondary"
      title="Secondary Alert"
      description="This is a secondary-colored alert for less critical information."
      animated
    />
  );
};

export default AlertSecondary;
