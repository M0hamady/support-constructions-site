import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // Tracks success or failure of submission

  // Handle input change
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setFormStatus('Please fill out all fields.');
      setIsSuccess(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus('Please enter a valid email address.');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setFormStatus('');
    setIsSuccess(null); // Reset previous status

    try {
      // Replace with actual API call
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
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
    <div className="w-full h-full min-h-screen bg-background flex justify-center items-center p-4">
      <div className="w-full max-w-[1196px] h-auto md:h-[667px] relative bg-white rounded-lg shadow flex flex-col md:flex-row">
        
        {/* Left Section - Contact Information */}
        <div className="w-full md:w-[491px] h-auto md:h-[647px] bg-dark rounded-t-lg md:rounded-l-lg text-white p-6 relative animate__animated animate__fadeIn">
          <h2 className="text-2xl md:text-3xl font-semibold font-display mt-6 z-50">Contact Information</h2>
          <p className="text-secondary text-lg mt-2 z-50">Say something to start a live chat!</p>
          <div className="mt-8 space-y-6 z-40">
            {/* Clickable Phone Number */}
            <p className="text-base font-normal">
              📞 <a href="tel:+201558585914" className="hover:underline">+201558585914</a>
            </p>
            {/* Clickable Email */}
            <p className="text-base font-normal">
              ✉️ <a href="mailto:support@supportconstructions.com" className="hover:underline">support@supportconstructions.com</a>
            </p>
            {/* Clickable Address with Google Maps Link */}
            <p className="text-base font-normal">
              📍 اكتوبر – 
              2G89+X9V فيلا 70 اللوتس الجنوبيه بجوار الكنيسه الانجيليه, New Cairo 1, Cairo Governorate 4743010
            </p>
            <p className="text-base font-normal">
              📍 <a
                href="https://www.google.com/maps/place/Support+Construction/@30.0174804,31.5184302,15z/data=!4m6!3m5!1s0x1458230066902075:0x4a453789aa4b326c!8m2!3d30.0174804!4d31.5184302!16s%2Fg%2F11w98f9d_2?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                موقعنا على خرائط جوجل
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 p-6 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* First Name */}
              <div className="relative">
                <label className="text-accent text-xs font-medium font-sans">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full h-[40px] mt-1 border p-2 rounded ${formData.firstName ? 'border-green-500' : 'border-gray-300'} transition`}
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <label className="text-accent text-xs font-medium font-sans">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full h-[40px] mt-1 border p-2 rounded ${formData.lastName ? 'border-green-500' : 'border-gray-300'} transition`}
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="text-accent text-xs font-medium font-sans">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-[40px] mt-1 border p-2 rounded ${formData.email && /\S+@\S+\.\S+/.test(formData.email) ? 'border-green-500' : 'border-gray-300'} transition`}
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="text-accent text-xs font-medium font-sans">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-[40px] mt-1 border p-2 rounded ${formData.phone ? 'border-green-500' : 'border-gray-300'} transition`}
                  placeholder="+1 012 3456 789"
                />
              </div>

              {/* Select Subject */}
              <div className="col-span-1 md:col-span-2 relative">
                <label className="text-black text-sm font-semibold font-sans">Select Subject?</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-[40px] mt-2 border border-gray-300 rounded p-2"
                >
                  <option>General Inquiry</option>
                  <option>Support Request</option>
                  <option>Billing</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-1 md:col-span-2 relative">
                <label className="text-accent text-xs font-medium font-sans">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full h-[100px] mt-1 border p-2 rounded ${formData.message ? 'border-green-500' : 'border-gray-300'} transition`}
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            {/* Form Status */}
            {formStatus && <p className={`text-sm ${isSuccess === false ? 'text-red-500' : 'text-green-500'}`}>{formStatus}</p>}

            {/* Send Message Button */}
            <button
              type="submit"
              className={`w-full md:w-[278px] bg-primary text-white text-lg py-2 rounded-md mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
