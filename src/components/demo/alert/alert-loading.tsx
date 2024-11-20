import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertLoading = () => {
  return (
    <ShadAlert
      variant="loading"
      title="Loading"
      description="Please wait while we process your request."
      animated
    />
  );
};

export default AlertLoading;
