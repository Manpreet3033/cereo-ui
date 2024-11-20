import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertInfo = () => {
  return (
    <ShadAlert
      variant="info"
      title="Information"
      description="Here's some additional information you might find useful."
      size="sm"
      animated
    />
  );
};

export default AlertInfo;
