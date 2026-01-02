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

const RequestDemoModal = ({ isOpen, onClose }: RequestDemoModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    schoolType: "",
    schoolName: "",
    contactNumber: "",
    contactPerson: "",
    schoolAddress: "",
  });
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (Object.values(formData).some((value) => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to email service
      // Configure your API endpoint in the environment variable or replace the URL below
      const API_ENDPOINT = import.meta.env.VITE_EMAIL_API_ENDPOINT || '/api/send-demo-request';
      
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send demo request');
      }

      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you shortly to schedule your demo.",
      });

      // Reset form and close modal
      setFormData({
        schoolType: "",
        schoolName: "",
        contactNumber: "",
        contactPerson: "",
        schoolAddress: "",
      });
      onClose();
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] animate-fade-in" >
      {/* Backdrop overlay - covers everything including navbar */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal container - centered in viewport */}
      <div className="relative z-10 flex items-center justify-center overflow-y-auto">
        <div className="relative w-full max-w-2xl my-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-1 right-1 text-white hover:text-accent transition-all bg-black/70 rounded-full p-1 hover:bg-accent hover:scale-80 hover:text-black z-10"
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
              </div>

              {/* School Name */}
              <div className="space-y-2">
                <Label htmlFor="schoolName" className="text-gray-700 text-base font-medium">
                  School Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="schoolName"
                  type="text"
                  placeholder="Enter school name"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange("schoolName", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-gray-700 text-base font-medium">
                  Contact Person <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactPerson"
                  type="text"
                  placeholder="Enter contact person name"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-gray-700 text-base font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="Enter contact number"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              {/* School Address */}
              <div className="space-y-2">
                <Label htmlFor="schoolAddress" className="text-gray-700 text-base font-medium">
                  School Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="schoolAddress"
                  type="text"
                  placeholder="Enter school address"
                  value={formData.schoolAddress}
                  onChange={(e) => handleInputChange("schoolAddress", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              {/* Submit Button */}
             <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-accent hover:opacity-90 text-base sm:text-lg py-2 sm:py-5 glow-teal"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoModal;