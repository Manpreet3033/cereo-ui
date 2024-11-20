import { ShadAlert } from "@/components/common/shad-alert";
import React from "react";

const AlertTimed = () => {
  return (
    <ShadAlert
      variant="info"
      title="Timed Alert"
      description="This alert will disappear in 5 seconds."
      duration={5}
      animated
    />
  );
};

export default AlertTimed;
