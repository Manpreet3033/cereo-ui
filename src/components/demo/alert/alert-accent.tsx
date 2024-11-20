import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertAccent = () => {
  return (
    <ShadAlert
      variant="accent"
      title="Accent Alert"
      description="This alert uses an accent color for emphasis."
      animated
    />
  );
};

export default AlertAccent;
