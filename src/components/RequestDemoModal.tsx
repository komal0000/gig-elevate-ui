import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  schoolType: string;
  schoolName: string;
  contactNumber: string;
  contactPerson: string;
  schoolAddress: string;
}

const INITIAL_FORM_DATA: FormData = {
  schoolType: "",
  schoolName: "",
  contactNumber: "",
  contactPerson: "",
  schoolAddress: "",
};

const RequestDemoModal = ({ isOpen, onClose }: RequestDemoModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setFormData(INITIAL_FORM_DATA);
      setFieldErrors({});
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, isSubmitting, onClose]);

  const trimFormData = (data: FormData): FormData => ({
    schoolType: data.schoolType.trim(),
    schoolName: data.schoolName.trim(),
    contactNumber: data.contactNumber.trim(),
    contactPerson: data.contactPerson.trim(),
    schoolAddress: data.schoolAddress.trim(),
  });

  const validateForm = (data: FormData) => {
    const trimmedData = trimFormData(data);
    const errors: Partial<Record<keyof FormData, string>> = {};

    (Object.keys(trimmedData) as Array<keyof FormData>).forEach((key) => {
      if (!trimmedData[key]) {
        errors[key] = "This field is required.";
      }
    });

    return { trimmedData, errors };
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { trimmedData, errors } = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const API_ENDPOINT = import.meta.env.VITE_EMAIL_API_ENDPOINT || 'https://formsubmit.co/personaluser9800@gmail.com';
      const isFormSubmitEndpoint = /formsubmit\.co/i.test(API_ENDPOINT);
      let response: Response;

      if (isFormSubmitEndpoint) {
        const formPayload = new FormData();
        formPayload.append("School Type", trimmedData.schoolType);
        formPayload.append("School Name", trimmedData.schoolName);
        formPayload.append("Contact Person", trimmedData.contactPerson);
        formPayload.append("Contact Number", trimmedData.contactNumber);
        formPayload.append("School Address", trimmedData.schoolAddress);
        formPayload.append("Submitted At", new Date().toISOString());
        formPayload.append("_captcha", "false");
        formPayload.append("_template", "table");
        formPayload.append("_subject", "New demo request");

        const normalizedEndpoint = API_ENDPOINT.includes("/ajax/")
          ? API_ENDPOINT
          : API_ENDPOINT.replace("formsubmit.co/", "formsubmit.co/ajax/");

        response = await fetch(normalizedEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formPayload,
          signal: controller.signal,
        });
      } else {
        response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            schoolType: trimmedData.schoolType,
            schoolName: trimmedData.schoolName,
            contactPerson: trimmedData.contactPerson,
            contactNumber: trimmedData.contactNumber,
            schoolAddress: trimmedData.schoolAddress,
            submittedAt: new Date().toISOString(),
          }),
          signal: controller.signal,
        });
      }

      if (!response.ok) {
        throw new Error('Failed to send demo request');
      }

      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you shortly to schedule your demo.",
      });

      setFormData(INITIAL_FORM_DATA);
      setFieldErrors({});
      onClose();
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Submission Failed",
        description:
          error instanceof DOMException && error.name === "AbortError"
            ? "The request took too long. Please try again."
            : "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] animate-fade-in" >
      {/* Backdrop overlay - covers everything including navbar */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={() => {
          if (!isSubmitting) {
            onClose();
          }
        }}
      />
      
      {/* Modal container - centered in viewport */}
      <div className="relative z-10 flex min-h-screen items-center justify-center overflow-y-auto p-4">
        <div className="relative w-full max-w-2xl my-4">
          {/* Close button */}
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="absolute top-1 right-1 z-10 rounded-full bg-black/70 p-1 text-white transition-all hover:scale-80 hover:bg-accent hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>

          {/* Modal content */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl animate-slide-up border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Request a <span className="text-teal-500">Demo</span>
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-4">
              Fill out the form below and we'll get back to you shortly to schedule your demo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* School Type */}
              <div className="space-y-2">
                <Label htmlFor="schoolType" className="text-gray-700 text-base font-medium">
                  School Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.schoolType}
                  onValueChange={(value) => handleInputChange("schoolType", value)}
                >
                  <SelectTrigger 
                    id="schoolType"
                    className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                  >
                    <SelectValue placeholder="Select school type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
                {fieldErrors.schoolType && (
                  <p className="text-sm text-red-500">{fieldErrors.schoolType}</p>
                )}
              </div>

              {/* School Name */}
              <div className="space-y-2">
                <Label htmlFor="schoolName" className="text-gray-700 text-base font-medium">
                  School Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="schoolName"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Enter school name"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange("schoolName", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
                {fieldErrors.schoolName && (
                  <p className="text-sm text-red-500">{fieldErrors.schoolName}</p>
                )}
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-gray-700 text-base font-medium">
                  Contact Person <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactPerson"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter contact person name"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
                {fieldErrors.contactPerson && (
                  <p className="text-sm text-red-500">{fieldErrors.contactPerson}</p>
                )}
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-gray-700 text-base font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Enter contact number"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
                {fieldErrors.contactNumber && (
                  <p className="text-sm text-red-500">{fieldErrors.contactNumber}</p>
                )}
              </div>

              {/* School Address */}
              <div className="space-y-2">
                <Label htmlFor="schoolAddress" className="text-gray-700 text-base font-medium">
                  School Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="schoolAddress"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Enter school address"
                  value={formData.schoolAddress}
                  onChange={(e) => handleInputChange("schoolAddress", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
                {fieldErrors.schoolAddress && (
                  <p className="text-sm text-red-500">{fieldErrors.schoolAddress}</p>
                )}
              </div>

              {/* Submit Button */}
             <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-accent py-2 text-base hover:opacity-90 sm:py-5 sm:text-lg glow-teal"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="mt-3 text-sm text-gray-500">
                {isSubmitting
                  ? "Sending your request now. Please keep this window open for a moment."
                  : "We’ll reach out shortly after your request is submitted."}
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoModal;
