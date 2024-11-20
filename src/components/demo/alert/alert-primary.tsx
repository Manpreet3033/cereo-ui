import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertPrimary = () => {
  return (
    <ShadAlert
      variant="primary"
      title="Primary Alert"
      description="This is a primary-colored alert for important messages."
      animated
    />
  );
};

export default AlertPrimary;
