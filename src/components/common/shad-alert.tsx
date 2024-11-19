import React, { useState, useEffect } from "react";
import {
  Terminal,
  CheckCircle,
  AlertTriangle,
  XOctagon,
  Info,
  X,
  Bell,
  Loader2,
  Zap,
  Coffee,
  Sun,
  Moon,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type AlertVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "loading"
  | "accent"
  | "neutral"
  | "dark"
  | "light"
  | "gradient";

type AlertSize = "sm" | "md" | "lg";

interface ShadAlertProps {
  variant?: AlertVariant;
  title: string;
  description: string;
  size?: AlertSize;
  closable?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  duration?: number;
  animated?: boolean;
}

export const ShadAlert = ({
  variant = "default",
  title,
  description,
  size = "md",
  closable = false,
  onClose,
  action,
  icon,
  duration,
  animated = false,
}: ShadAlertProps) => {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress <= 0) {
            clearInterval(timer);
            return 0;
          }
          return oldProgress - 100 / (duration * 10);
        });
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [duration]);

  useEffect(() => {
    if (progress <= 0) {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const variantStyles: Record<AlertVariant, string> = {
    default: "bg-secondary text-secondary-foreground",
    success: "bg-green-50 text-green-900 border-green-200",
    warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
    error: "bg-red-50 text-red-900 border-red-200",
    info: "bg-blue-50 text-blue-900 border-blue-200",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    loading: "bg-gray-50 text-gray-900 border-gray-200",
    accent: "bg-purple-100 text-purple-900 border-purple-200",
    neutral: "bg-gray-100 text-gray-900 border-gray-200",
    dark: "bg-gray-800 text-white border-gray-700",
    light: "bg-white text-gray-900 border-gray-100",
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent",
  };

  const icons: Record<AlertVariant, React.ReactNode> = {
    default: <Terminal className="h-5 w-5" />,
    success: (
      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-600" />
    ),
    warning: (
      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-600" />
    ),
    error: <XOctagon className="h-5 w-5 text-red-600 dark:text-red-600" />,
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-600" />,
    primary: <Bell className="h-5 w-5" />,
    secondary: <Info className="h-5 w-5" />,
    loading: <Loader2 className="h-5 w-5 animate-spin" />,
    accent: <Zap className="h-5 w-5 text-purple-600 dark:text-purple-600" />,
    neutral: <Coffee className="h-5 w-5 text-gray-600 dark:text-gray-600" />,
    dark: <Moon className="h-5 w-5 text-white dark:text-white" />,
    light: <Sun className="h-5 w-5 text-yellow-400 dark:text-yellow-400" />,
    gradient: <Cloud className="h-5 w-5 text-white dark:text-white" />,
  };

  const sizeStyles: Record<AlertSize, string> = {
    sm: "p-2 text-sm",
    md: "p-4 text-base",
    lg: "p-6 text-lg",
  };

  if (!isVisible) return null;

  return (
    <Alert
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        "relative overflow-hidden transition-all duration-300 ease-in-out",
        animated && "animate-in slide-in-from-top-5 fade-in duration-300",
        progress <= 0 && "animate-out slide-out-to-top-5 fade-out duration-300"
      )}
    >
      {icon || icons[variant]}
      <AlertTitle className="mb-1">{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {action && <div className="mt-2">{action}</div>}
      {closable && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 hover:bg-transparent"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      )}
      {duration && (
        <Progress
          value={progress}
          className="absolute bottom-0 left-0 right-0 h-1 bg-transparent"
        />
      )}
    </Alert>
  );
};

export default function AlertDemo() {
  const [showAlerts, setShowAlerts] = useState<Record<string, boolean>>({
    default: true,
    success: true,
    warning: true,
    error: true,
    info: true,
    primary: true,
    secondary: true,
    loading: true,
    accent: true,
    neutral: true,
    dark: true,
    light: true,
    gradient: true,
    custom: true,
    timed: true,
  });

  const handleClose = (key: string) => {
    setShowAlerts((prev) => ({ ...prev, [key]: false }));
  };

  const resetAlerts = () => {
    setShowAlerts({
      default: true,
      success: true,
      warning: true,
      error: true,
      info: true,
      primary: true,
      secondary: true,
      loading: true,
      accent: true,
      neutral: true,
      dark: true,
      light: true,
      gradient: true,
      custom: true,
      timed: true,
    });
  };

  return (
    <div className="space-y-4">
      {showAlerts.default && (
        <ShadAlert
          title="Default Alert"
          description="This is the default alert style."
          size="sm"
          animated
        />
      )}
      {showAlerts.success && (
        <ShadAlert
          variant="success"
          title="Success!"
          description="Your action was completed successfully."
          closable
          onClose={() => handleClose("success")}
          animated
        />
      )}
      {showAlerts.warning && (
        <ShadAlert
          variant="warning"
          title="Warning"
          description="Please be cautious about this action."
          size="lg"
          action={
            <Button variant="outline" size="sm">
              Acknowledge
            </Button>
          }
          animated
        />
      )}
      {showAlerts.error && (
        <ShadAlert
          variant="error"
          title="Error"
          description="An error occurred. Please try again."
          closable
          onClose={() => handleClose("error")}
          action={
            <Button variant="destructive" size="sm">
              Retry
            </Button>
          }
          animated
        />
      )}
      {showAlerts.info && (
        <ShadAlert
          variant="info"
          title="Information"
          description="Here's some additional information you might find useful."
          size="sm"
          animated
        />
      )}
      {showAlerts.primary && (
        <ShadAlert
          variant="primary"
          title="Primary Alert"
          description="This is a primary-colored alert for important messages."
          animated
        />
      )}
      {showAlerts.secondary && (
        <ShadAlert
          variant="secondary"
          title="Secondary Alert"
          description="This is a secondary-colored alert for less critical information."
          animated
        />
      )}
      {showAlerts.loading && (
        <ShadAlert
          variant="loading"
          title="Loading"
          description="Please wait while we process your request."
          animated
        />
      )}
      {showAlerts.accent && (
        <ShadAlert
          variant="accent"
          title="Accent Alert"
          description="This alert uses an accent color for emphasis."
          animated
        />
      )}
      {showAlerts.neutral && (
        <ShadAlert
          variant="neutral"
          title="Neutral Alert"
          description="A neutral-toned alert for general messages."
          animated
        />
      )}
      {showAlerts.dark && (
        <ShadAlert
          variant="dark"
          title="Dark Alert"
          description="A dark-themed alert for contrast or night mode."
          animated
        />
      )}
      {showAlerts.light && (
        <ShadAlert
          variant="light"
          title="Light Alert"
          description="A light-themed alert for bright interfaces."
          animated
        />
      )}
      {showAlerts.gradient && (
        <ShadAlert
          variant="gradient"
          title="Gradient Alert"
          description="An eye-catching gradient alert for special messages."
          animated
        />
      )}
      {showAlerts.custom && (
        <ShadAlert
          variant="primary"
          title="Custom Icon Alert"
          description="This alert uses a custom icon."
          icon={<Bell className="h-5 w-5 text-primary-foreground" />}
          animated
        />
      )}
      {showAlerts.timed && (
        <ShadAlert
          variant="info"
          title="Timed Alert"
          description="This alert will disappear in 5 seconds."
          duration={5}
          animated
        />
      )}
      <Button onClick={resetAlerts} className="mt-4">
        Reset Alerts
      </Button>
    </div>
  );
}
