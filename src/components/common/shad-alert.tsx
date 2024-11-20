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
    primary: <Bell className="h-5 w-5 dark:text-black" color="purple" />,
    secondary: <Info className="h-5 w-5" />,
    loading: <Loader2 className="h-5 w-5 animate-spin" color="black" />,
    accent: <Zap className="h-5 w-5 text-purple-600 dark:text-purple-600" />,
    neutral: <Coffee className="h-5 w-5 text-gray-600 dark:text-gray-600" />,
    dark: <Moon className="h-5 w-5" color="white" />,
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
          className="absolute bottom-0 left-0 right-0 h-1 bg-transparent [&>div]:bg-secondary-foreground/40 dark:[&>div]:bg-primary-foreground/60"
        />
      )}
    </Alert>
  );
};
