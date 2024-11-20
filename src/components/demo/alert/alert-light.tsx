import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertLight = () => {
  return (
    <ShadAlert
      variant="light"
      title="Light Alert"
      description="A light-themed alert for bright interfaces."
      animated
    />
  );
};

export default AlertLight;
