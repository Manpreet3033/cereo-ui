import { ShadAlert } from "@/components/common/shad-alert";
import { Construction } from "lucide-react";
import React from "react";

const AlertCustom = () => {
  return (
    <ShadAlert
      variant="primary"
      title="Custom Icon Alert"
      description="This alert uses a custom icon."
      icon={<Construction className="h-5 w-5" color="red" />}
      animated
    />
  );
};

export default AlertCustom;
