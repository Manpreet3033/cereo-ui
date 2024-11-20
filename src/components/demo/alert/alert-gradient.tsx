import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertGradient = () => {
  return (
    <ShadAlert
      variant="gradient"
      title="Gradient Alert"
      description="An eye-catching gradient alert for special messages."
      animated
    />
  );
};

export default AlertGradient;
