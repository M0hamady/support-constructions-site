import React, { useState } from 'react';
import axios from 'axios';
import BannerSection from '../../components/common/BannerSection';
import { Banner } from '../../assets/images';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    officeSection: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''  // Add message validation here
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simple validation
    const newErrors = { name: '', phone: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required'; // Add validation for message

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      try {
        await axios.post('https://api.yourwebsite.com/contact', formData); // Replace with your API endpoint
        setMessageSent(true);
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsSending(false);
      }
    } else {
      setIsSending(false);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <BannerSection backgroundImage={Banner} firstWord="تواصل معنا" />

      {/* Contact Form Section */}
      <div className="container mx-auto px-[100px] py-10">
        <div className="text-right text-white text-2xl font-bold font-['Tajawal'] mb-4 animate-fadeIn">
          أرسل رسائلك عبر النموذج أدناه
        </div>
        <div className="w-[50px] h-0.5 bg-[#BAAD87] mb-8 animate-slideInRight"></div>

        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4 animate-slideInUp">
          {/* Name Input */}
          <div className="w-full md:w-1/2 px-4 mb-6 relative">
            <label className="text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px] block mb-2">
              اسمك <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 rounded-lg border border-[#cccccc] focus:border-[#7b61ff] focus:ring focus:ring-[#7b61ff] outline-none transition-all"
            />
            <div className="text-[#eb5757] text-xs">{errors.name}</div>
          </div>

          {/* Phone Input */}
          <div className="w-full md:w-1/2 px-4 mb-6 relative">
            <label className="text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px] block mb-2">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 rounded-lg border border-[#cccccc] focus:border-[#7b61ff] focus:ring focus:ring-[#7b61ff] outline-none transition-all"
              required
            />
            <div className="text-[#eb5757] text-xs">{errors.phone}</div>
          </div>

          {/* Message Textarea */}
          <div className="w-full px-4 mb-6 relative">
            <label className="text-[#666666] text-xs font-semibold font-['Noto Sans'] leading-[18px] block mb-2">
              رسالتك <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 rounded-lg border border-[#cccccc] focus:border-[#7b61ff] focus:ring focus:ring-[#7b61ff] outline-none transition-all"
              required
            />
            <div className="text-[#eb5757] text-xs">{errors.message}</div>
          </div>

          {/* Submit Button */}
          <div className="w-full px-4 flex justify-end">
            <button
              type="submit"
              className={`${
                isSending ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#BAAD87] hover:bg-[#9E9195]'
              } text-white text-sm font-normal px-6 py-3 rounded-lg transition-all`}
              disabled={isSending}
            >
              {isSending ? 'جاري الإرسال...' : 'أرسل رسالة'}
            </button>
          </div>

          {/* Success Message */}
          {messageSent && (
            <div className="text-green-500 mt-4 text-center font-semibold">
              تم إرسال رسالتك بنجاح!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
