import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Trash2, Download, Share2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import OTP from "../input/otp-input";

interface ConfirmationDialogType {
  onConfirm: () => void;
  onCancel: () => void;
}
export const ConfirmationDialog = ({
  onConfirm,
  onCancel,
}: ConfirmationDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Delete Item</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the item
          from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 2. Information Dialog
interface InformationDialogType {
  title: string;
  description: string;
}
export const InformationDialog = ({
  title,
  description,
}: InformationDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Info</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>OK</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 3. Warning Dialog
interface WarningDialogType {
  message: string;
  onProceed: () => void;
}
export const WarningDialog = ({ message, onProceed }: WarningDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Proceed with Caution</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Warning</AlertDialogTitle>
        <AlertDialogDescription>{message}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onProceed}>Proceed</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 4. Input Dialog
interface InputDialogType {
  onSubmit: (input: string) => void;
}
export const InputDialog = ({ onSubmit }: InputDialogType) => {
  const [input, setInput] = React.useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Input Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enter Information</AlertDialogTitle>
          <AlertDialogDescription>
            Please provide the required information below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text here"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(input)}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 5. Success Dialog
interface SuccessDialogType {
  message: string;
}
export const SuccessDialog = ({ message }: SuccessDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Success</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Success!</AlertDialogTitle>
        <AlertDialogDescription>{message}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>OK</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 6. Error Dialog
interface ErrorDialogType {
  message: string;
  onRetry: () => void;
}
export const ErrorDialog = ({ message, onRetry }: ErrorDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Error</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Error Occurred</AlertDialogTitle>
        <AlertDialogDescription>{message}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Close</AlertDialogCancel>
        <AlertDialogAction onClick={onRetry}>Retry</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 7. Form Dialog
interface FormDialogType {
  onSubmit: (name: string, email: string) => void;
}
export const FormDialog = ({ onSubmit }: FormDialogType) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Form</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>User Information</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(name, email)}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 8. Progress Dialog
interface ProgressDialogType {
  progress: number;
}
export const ProgressDialog = ({ progress }: ProgressDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Progress</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Operation in Progress</AlertDialogTitle>
        <AlertDialogDescription>
          Please wait while we process your request.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <Progress value={progress} className="w-full" />
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 9. Selection Dialog
interface SelectionDialogType {
  options: string[];
  onSelect: () => void;
}
export const SelectionDialog = ({ options, onSelect }: SelectionDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Make Selection</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Select an Option</AlertDialogTitle>
        <AlertDialogDescription>
          Please choose one of the following options.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <RadioGroup defaultValue="option1">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              value={`option${index + 1}`}
              id={`option${index + 1}`}
            />
            <Label htmlFor={`option${index + 1}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onSelect}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 10. Help Dialog
interface HelpDialogType {
  content: string;
}
export const HelpDialog = ({ content }: HelpDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Get Help</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Help & Support</AlertDialogTitle>
      </AlertDialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <AlertDialogDescription>{content}</AlertDialogDescription>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction>Close</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 11. Notification Dialog
interface NotificationDialogType {
  title: string;
  message: string;
}
export const NotificationDialog = ({
  title,
  message,
}: NotificationDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Notification</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{message}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Dismiss</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 12. Terms and Conditions Dialog
interface TermsDialogType {
  terms: string;
  onAccept: () => void;
}
export const TermsDialog = ({ terms, onAccept }: TermsDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">View Terms</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
      </AlertDialogHeader>
      <div className="max-h-[60vh] overflow-y-auto">
        <AlertDialogDescription>{terms}</AlertDialogDescription>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Decline</AlertDialogCancel>
        <AlertDialogAction onClick={onAccept}>Accept</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// 13. Feedback Dialog
interface FeedbackDialogType {
  onSubmit: (feedback: string) => void;
}
export const FeedbackDialog = ({ onSubmit }: FeedbackDialogType) => {
  const [feedback, setFeedback] = React.useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Give Feedback</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Provide Feedback</AlertDialogTitle>
          <AlertDialogDescription>
            We value your opinion. Please share your thoughts with us.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(feedback)}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 14. Settings Dialog
interface SettingsDialogType {
  settings: Record<string, boolean>;
  onSave: (newSettings: Record<string, boolean>) => void;
}
export const SettingsDialog = ({ settings, onSave }: SettingsDialogType) => {
  const [localSettings, setLocalSettings] =
    React.useState<Record<string, boolean>>(settings);
  const handleCheckedChange = (key: string, checked: boolean) => {
    setLocalSettings((prev) => ({ ...prev, [key]: checked }));
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Settings</AlertDialogTitle>
          <AlertDialogDescription>
            Adjust your preferences below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(localSettings).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={value}
                onCheckedChange={(checked) =>
                  handleCheckedChange(key, checked as boolean)
                }
              />
              <Label htmlFor={key}>{key}</Label>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSave(localSettings)}>
            Save Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 15. Custom Icon Dialog
interface CustomIconDialogType {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  onConfirm: () => void;
}
export const CustomIconDialog = ({
  icon: Icon,
  title,
  description,
  onConfirm,
}: CustomIconDialogType) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Custom Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <div className="flex items-center space-x-2">
          <Icon className="h-6 w-6" />
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </div>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Usage example of CustomIconDialog
export const DeleteAccountDialog = () => (
  <CustomIconDialog
    icon={Trash2}
    title="Delete Account"
    description="Are you sure you want to delete your account? This action cannot be undone."
    onConfirm={() => console.log("Account deleted")}
  />
);

export const DownloadDialog = () => (
  <CustomIconDialog
    icon={Download}
    title="Download File"
    description="You are about to download a large file. Do you want to proceed?"
    onConfirm={() => console.log("Download started")}
  />
);

export const ShareDialog = () => (
  <CustomIconDialog
    icon={Share2}
    title="Share Content"
    description="Choose how you'd like to share this content."
    onConfirm={() => console.log("Sharing options displayed")}
  />
);

// 16. Testimonial Submission Dialog
interface TestimonialSubmissionDialogType {
  onSubmit: (testimonial: {
    name: string;
    rating: number;
    testimonial: string;
  }) => void;
}
export const TestimonialDialog = ({
  onSubmit,
}: TestimonialSubmissionDialogType) => {
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [testimonial, setTestimonial] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = () => {
    onSubmit({ name, rating, testimonial });
    setIsOpen(false);
    setName("");
    setRating(5);
    setTestimonial("");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Submit Testimonial</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Submit Your Testimonial</AlertDialogTitle>
          <AlertDialogDescription>
            We appreciate your feedback! Please share your experience with us.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Slider
              id="rating"
              min={1}
              max={5}
              step={1}
              value={[rating]}
              onValueChange={(value) => setRating(value[0])}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="testimonial" className="text-right">
              Testimonial
            </Label>
            <Textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 17. Image Upload Dialog
interface ImageUploadDialogType {
  onUpload: (file: File) => void;
}
export const ImageUploadDialog = ({ onUpload }: ImageUploadDialogType) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setIsOpen(false);
      setFile(null);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Upload Image</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Upload an Image</AlertDialogTitle>
          <AlertDialogDescription>
            Choose an image file to upload. Supported formats: JPG, PNG, GIF.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleUpload} disabled={!file}>
            Upload
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 18. Date Picker Dialog
interface DatePickerDialogType {
  onSelect: (date: Date) => void;
}
export const DatePickerDialog = ({ onSelect }: DatePickerDialogType) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    if (date) {
      onSelect(date);
      setIsOpen(false);
      setDate(undefined);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Select Date</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Choose a Date</AlertDialogTitle>
          <AlertDialogDescription>
            Select a date for your appointment or event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSelect} disabled={!date}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 19. Language Selection Dialog
interface LanguageSelectionDialogType {
  languages: { code: string; name: string }[];
  onSelect: (languageCode: string) => void;
}
export const LanguageSelectionDialog = ({
  languages = [],
  onSelect = () => {},
}: LanguageSelectionDialogType) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    if (selectedLanguage) {
      onSelect(selectedLanguage);
      setIsOpen(false);
      setSelectedLanguage("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Change Language</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Language</AlertDialogTitle>
          <AlertDialogDescription>
            Choose your preferred language for the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Select onValueChange={setSelectedLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSelect}
            disabled={!selectedLanguage}
          >
            Apply
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 20. Newsletter Subscription Dialog
interface NewsletterSubscriptionDialogType {
  onSubscribe: (email: string) => void;
}
export const NewsletterDialog = ({
  onSubscribe,
}: NewsletterSubscriptionDialogType) => {
  const [email, setEmail] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubscribe = () => {
    if (email && consent) {
      onSubscribe(email);
      setIsOpen(false);
      setEmail("");
      setConsent(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Subscribe to Newsletter</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Subscribe to Our Newsletter</AlertDialogTitle>
          <AlertDialogDescription>
            Stay updated with our latest news and offers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label htmlFor="consent">I agree to receive marketing emails</Label>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubscribe}
            disabled={!email || !consent}
          >
            Subscribe
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 21. Feature Tour Dialog
interface FeatureTourDialogType {
  features: { title: string; description: string }[];
  onComplete: () => void;
}
export const FeatureTourDialog = ({
  features = [],
  onComplete,
}: FeatureTourDialogType) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleComplete = () => {
    onComplete();
    setIsOpen(false);
    setCurrentStep(0);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Start Feature Tour</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{features[currentStep]?.title}</AlertDialogTitle>
          <AlertDialogDescription>
            {features[currentStep]?.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Progress value={((currentStep + 1) / features.length) * 100} />
        <AlertDialogFooter>
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          )}
          {currentStep < features.length - 1 ? (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>
              Next
            </Button>
          ) : (
            <AlertDialogAction onClick={handleComplete}>
              Finish Tour
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 22. Color Theme Selection Dialog
interface ColorThemeSelectionDialogType {
  themes: { value: string; label: string }[];
  onSelect: (theme: string) => void;
}
export const ColorThemeDialog = ({
  themes = [],
  onSelect = () => {},
}: ColorThemeSelectionDialogType) => {
  const [selectedTheme, setSelectedTheme] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = () => {
    if (selectedTheme) {
      onSelect(selectedTheme);
      setIsOpen(false);
      setSelectedTheme("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Choose Color Theme</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Color Theme</AlertDialogTitle>
          <AlertDialogDescription>
            Choose a color theme for the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup onValueChange={setSelectedTheme}>
          {themes.map((theme) => (
            <div key={theme.value} className="flex items-center space-x-2">
              <RadioGroupItem value={theme.value} id={theme.value} />
              <Label htmlFor={theme.value}>{theme.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSelect} disabled={!selectedTheme}>
            Apply Theme
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 23. Privacy Settings Dialog
interface PrivacySettingsDialogType {
  settings: { [key: string]: boolean };
  onSave: (settings: { [key: string]: boolean }) => void;
}
export const PrivacySettingsDialog = ({
  settings = {},
  onSave,
}: PrivacySettingsDialogType) => {
  const [localSettings, setLocalSettings] = React.useState(settings);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSave = () => {
    onSave(localSettings);
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Privacy Settings</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Privacy Settings</AlertDialogTitle>
          <AlertDialogDescription>
            Manage your privacy preferences.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(localSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key}>{key}</Label>
              <Switch
                id={key}
                checked={value as boolean}
                onCheckedChange={(checked) =>
                  setLocalSettings((prev) => ({ ...prev, [key]: checked }))
                }
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>
            Save Settings
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 24. Two-Factor Authentication Dialog
interface TwoFactorAuthDialogType {
  onVerify: (code: string) => void;
}
export const TwoFactorAuthDialog = ({ onVerify }: TwoFactorAuthDialogType) => {
  const [code, setCode] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleVerify = () => {
    if (code.length === 6) {
      onVerify(code);
      setIsOpen(false);
      setCode("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Verify 2FA</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Two-Factor Authentication</AlertDialogTitle>
          <AlertDialogDescription>
            Enter the 6-digit code from your authenticator app.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <OTP code={code} setCode={setCode} />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleVerify}
            disabled={code.length !== 6}
          >
            Verify
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// 25. Coupon Code Dialog
interface CouponCodeDialogType {
  onApply: (code: string) => void;
}
export const CouponCodeDialog = ({ onApply }: CouponCodeDialogType) => {
  const [code, setCode] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleApply = () => {
    if (code) {
      onApply(code);
      setIsOpen(false);
      setCode("");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Apply Coupon</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apply Coupon Code</AlertDialogTitle>
          <AlertDialogDescription>
            Enter a valid coupon code to get a discount.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          type="text"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleApply} disabled={!code}>
            Apply Coupon
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// Example usage of all dialogs
export default function DialogShowcase() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <ConfirmationDialog
        onConfirm={() => console.log("Confirmed")}
        onCancel={() => console.log("Cancelled")}
      />
      <InformationDialog
        title="Info"
        description="This is some important information."
      />
      <WarningDialog
        message="This action may have consequences."
        onProceed={() => console.log("Proceeded")}
      />
      <InputDialog onSubmit={(input) => console.log("Submitted:", input)} />
      <SuccessDialog message="Operation completed successfully!" />
      <ErrorDialog
        message="An error occurred. Please try again."
        onRetry={() => console.log("Retrying...")}
      />
      <FormDialog onSubmit={(data) => console.log("Form submitted:", data)} />
      <ProgressDialog progress={75} />
      <SelectionDialog
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={() => console.log("Option selected")}
      />
      <HelpDialog content="This is the help content. You can find more information about using our product here." />
      <NotificationDialog
        title="New Message"
        message="You have a new message from John Doe."
      />
      <TermsDialog
        terms="These are the terms and conditions..."
        onAccept={() => console.log("Terms accepted")}
      />
      <FeedbackDialog
        onSubmit={(feedback) => console.log("Feedback submitted:", feedback)}
      />
      <SettingsDialog
        settings={{ notifications: true, darkMode: false, autoSave: true }}
        onSave={(settings) => console.log("Settings saved:", settings)}
      />
      <DeleteAccountDialog />
      <DownloadDialog />
      <ShareDialog />
      <TestimonialDialog
        onSubmit={(data) => console.log("Testimonial submitted:", data)}
      />
      <ImageUploadDialog
        onUpload={(file) => console.log("File uploaded:", file)}
      />
      <DatePickerDialog
        onSelect={(date) => console.log("Date selected:", date)}
      />
      <LanguageSelectionDialog
        languages={[
          { code: "en", name: "English" },
          { code: "es", name: "Spanish" },
          { code: "fr", name: "French" },
        ]}
        onSelect={(lang) => console.log("Language selected:", lang)}
      />
      <NewsletterDialog
        onSubscribe={(email) => console.log("Subscribed:", email)}
      />
      <FeatureTourDialog
        features={[
          { title: "Dashboard", description: "This is your main dashboard." },
          { title: "Profile", description: "Here you can edit your profile." },
          {
            title: "Settings",
            description: "Adjust your account settings here.",
          },
        ]}
        onComplete={() => console.log("Tour completed")}
      />
      <ColorThemeDialog
        themes={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "system", label: "System" },
        ]}
        onSelect={(theme) => console.log("Theme selected:", theme)}
      />
      <PrivacySettingsDialog
        settings={{
          "Allow Cookies": true,
          "Share Data with Partners": false,
          "Receive Marketing Emails": true,
        }}
        onSave={(settings) => console.log("Privacy settings saved:", settings)}
      />
      <TwoFactorAuthDialog
        onVerify={(code) => console.log("2FA code entered:", code)}
      />
      <CouponCodeDialog
        onApply={(code) => console.log("Coupon applied:", code)}
      />
    </div>
  );
}
