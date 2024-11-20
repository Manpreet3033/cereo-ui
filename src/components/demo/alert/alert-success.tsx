import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertSuccess = () => {
  return (
    <ShadAlert
      variant="success"
      title="Success!"
      description="Your action was completed successfully."
      closable
      animated
    />
  );
};

export default AlertSuccess;
