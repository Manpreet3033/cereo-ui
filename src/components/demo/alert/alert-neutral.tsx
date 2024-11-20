import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertNeutral = () => {
  return (
    <ShadAlert
      variant="neutral"
      title="Neutral Alert"
      description="A neutral-toned alert for general messages."
      animated
    />
  );
};

export default AlertNeutral;
