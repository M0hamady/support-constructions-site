import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const [errors, setErrors] = useState({
    email: '',
    phone_number: '',
    message: '',
  });

  // Basic email and phone validation
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone_number: string) => /^\+?\d{10,15}$/.test(phone_number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { email: '', phone_number: '', message: '' };

    // Validation checks
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }
    if (!validatePhone(formData.phone_number)) {
      newErrors.phone_number = 'Please enter a valid phone number (10-15 digits).';
      formIsValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Please enter your message.';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setFormStatus('');
    setIsSuccess(null);

    try {
      // Replace with actual API call
      const response = await fetch('https://codeoceantech.pythonanywhere.com/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormStatus('Thank you for reaching out! We’ll get back to you shortly.');
        setFormData({ email: '', phone_number: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setIsSuccess(false);
      setFormStatus('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Section - Contact Information */}
        <div className="w-full md:w-1/3 bg-primary text-white p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-center">Contact Information</h2>
          <p className="text-center text-lg">We'd love to hear from you! Reach out with any questions or feedback.</p>
          <div className="text-center">
            <p>📞 <a href="tel:+201558585914" className="hover:underline text-lg">+201558585914</a></p>
            <p>✉️ <a href="mailto:support@supportdecore.com" className="hover:underline text-lg">support@supportdecore.com</a></p>
            <p>📍 <a
                href="https://www.google.com/maps/place/Support+Construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-lg"
              >
                Find us on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 p-8">
          {isSuccess === null ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.phone_number ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 234 567 890"
                />
                {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Write your message here..."
                  rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Form Status */}
              {formStatus && <p className={`text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{formStatus}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-primary text-white py-3 rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{formStatus}</h3>
              <p className="mt-4 text-lg text-gray-600">We’ll get back to you as soon as possible!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
