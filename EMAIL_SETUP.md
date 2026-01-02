# Email Setup for Request Demo Feature

The Request Demo modal is now fully functional with email integration. Here's how to set it up:

## Current Implementation

The form collects:
- School Type (Government/Private)
- School Name
- Contact Number
- Contact Person
- School Address

When submitted, it sends this data to a backend API endpoint.

## Setup Options

### Option 1: Create Your Own Backend API (Recommended)

Create a backend service (Node.js, Python, etc.) with an endpoint that receives the form data and sends an email.

**Example Node.js/Express Backend:**

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp.office365.com', etc.
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

app.post('/api/send-demo-request', async (req, res) => {
  const { schoolType, schoolName, contactNumber, contactPerson, schoolAddress, timestamp } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@giginnovation.com', // Your receiving email
    subject: 'New Demo Request - ' + schoolName,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>School Type:</strong> ${schoolType}</p>
      <p><strong>School Name:</strong> ${schoolName}</p>
      <p><strong>Contact Person:</strong> ${contactPerson}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>School Address:</strong> ${schoolAddress}</p>
      <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

**Install dependencies:**
```bash
npm install express nodemailer cors
```

### Option 2: Use EmailJS (Client-side, No Backend Needed)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update the RequestDemoModal component to use EmailJS

**Modified handleSubmit:**
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
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
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        school_type: formData.schoolType,
        school_name: formData.schoolName,
        contact_person: formData.contactPerson,
        contact_number: formData.contactNumber,
        school_address: formData.schoolAddress,
      },
      'YOUR_PUBLIC_KEY'
    );

    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you shortly to schedule your demo.",
    });

    setFormData({
      schoolType: "",
      schoolName: "",
      contactNumber: "",
      contactPerson: "",
      schoolAddress: "",
    });
    onClose();
  } catch (error) {
    console.error('Error:', error);
    toast({
      title: "Submission Failed",
      description: "Please try again later or contact us directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 3: Use FormSubmit.co (Simple, No Backend)

Change the API endpoint to:
```
VITE_EMAIL_API_ENDPOINT=https://formsubmit.co/your-email@giginnovation.com
```

### Option 4: Use Netlify Forms or Vercel Forms

If deploying to Netlify or Vercel, you can use their built-in form handling.

## Environment Configuration

1. Copy `.env.example` to `.env`
2. Set `VITE_EMAIL_API_ENDPOINT` to your backend URL
3. Restart your development server

## Email Provider Options

Common SMTP providers you can use:
- **Gmail**: Requires app-specific password
- **SendGrid**: Free tier available
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly
- **Postmark**: Reliable delivery

## Security Notes

⚠️ **Important:**
- Never expose SMTP credentials in frontend code
- Always use a backend API to send emails
- Implement rate limiting to prevent spam
- Add CAPTCHA for production use
- Validate and sanitize all input data

## Testing

For testing purposes, you can use [Mailtrap.io](https://mailtrap.io/) to capture emails without actually sending them.

## Need Help?

Let me know which option you'd like to use, and I can help you configure it:
1. What email provider do you have? (Gmail, Office 365, custom SMTP)
2. Do you have a backend server, or would you prefer a serverless solution?
3. What's your expected email volume?
