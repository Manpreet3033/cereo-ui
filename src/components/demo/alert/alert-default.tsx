import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertDefault = () => {
  return (
    <ShadAlert
      title="Default Alert"
      description="This is the default alert style."
      size="sm"
      animated
    />
  );
};

export default AlertDefault;
