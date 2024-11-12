import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-[1196px] h-auto md:h-[667px] relative bg-white rounded-lg shadow flex flex-col md:flex-row">
        
        {/* Left Section - Contact Information */}
        <div className="w-full md:w-[491px] h-auto md:h-[647px] bg-[#191919] rounded-t-lg md:rounded-l-lg text-white p-6 relative">
          <div className="w-[269px] h-[269px] bg-[#191919] rounded-full absolute bottom-10 right-10 opacity-60"></div>
          <div className="w-[138px] h-[138px] bg-[#484848]/50 rounded-full absolute bottom-16 right-16"></div>
          <h2 className="text-2xl md:text-3xl font-semibold font-['Poppins'] mt-6">Contact Information</h2>
          <p className="text-[#c8c8c8] text-lg mt-2">Say something to start a live chat!</p>
          <div className="mt-8 space-y-6">
            <p className="text-base font-normal">📞 +1558585914</p>
            <p className="text-base font-normal">✉️ support@supportconstructions.com</p>
            <p className="text-base font-normal">
              📍  اكتوبر – 
              2G89+X9V فيلا 70 اللوتس الجنوبيه بجوار الكنيسه الانجيليه, New Cairo 1, Cairo Governorate 4743010
            </p>
            <p className="text-base font-normal">
              📍 <a
              href="https://www.google.com/maps/place/Support+Construction/@30.0174804,31.5184302,15z/data=!4m6!3m5!1s0x1458230066902075:0x4a453789aa4b326c!8m2!3d30.0174804!4d31.5184302!16s%2Fg%2F11w98f9d_2?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#baad87] hover:underline"
            >
              موقعنا على خرائط جوجل
            </a>
            </p>
          </div>
          <div className="flex space-x-4 mt-12">
            <div className="w-[30px] h-[30px] bg-[#1a1a1a] rounded-full"></div>
            <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
            <div className="w-[30px] h-[30px] bg-[#1a1a1a] rounded-full"></div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* First Name */}
            <div>
              <label className="text-[#8d8d8d] text-xs font-medium font-['Poppins']">First Name</label>
              <input
                type="text"
                className="w-full h-[40px] mt-1 border border-gray-300 p-2 rounded"
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-[#8d8d8d] text-xs font-medium font-['Poppins']">Last Name</label>
              <input
                type="text"
                className="w-full h-[40px] mt-1 border border-gray-300 p-2 rounded"
                placeholder="Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[#8d8d8d] text-xs font-medium font-['Poppins']">Email</label>
              <input
                type="email"
                className="w-full h-[40px] mt-1 border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-[#8d8d8d] text-xs font-medium font-['Poppins']">Phone Number</label>
              <input
                type="tel"
                className="w-full h-[40px] mt-1 border border-gray-300 p-2 rounded"
                placeholder="+1 012 3456 789"
              />
            </div>

            {/* Select Subject */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-black text-sm font-semibold font-['Poppins']">Select Subject?</label>
              <select className="w-full h-[40px] mt-2 border border-gray-300 rounded p-2">
                <option>General Inquiry</option>
                <option>Support Request</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-[#8d8d8d] text-xs font-medium font-['Poppins']">Message</label>
              <textarea
                className="w-full h-[100px] mt-1 border border-gray-300 rounded p-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
          </div>

          {/* Send Message Button */}
          <button className="w-full md:w-[278px] h-[54px] bg-black text-white rounded shadow mt-6 font-medium">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
