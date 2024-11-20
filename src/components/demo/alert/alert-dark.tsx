import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertDark = () => {
  return (
    <ShadAlert
      variant="dark"
      title="Dark Alert"
      description="A dark-themed alert for contrast or night mode."
      animated
    />
  );
};

export default AlertDark;
