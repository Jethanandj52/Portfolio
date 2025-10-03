import React from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="p-6 sm:p-12 min-h-screen   text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Have questions, ideas, or just want to connect? Drop a message and I’ll get back to you soon.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
        {/* Contact Form */}
        <form className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 border border-gray-700">
          <div>
            <label className="block mb-2 font-medium text-gray-200 text-sm sm:text-base">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-200 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-200 text-sm sm:text-base">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>

        {/* Personal Info */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-center text-center md:text-left space-y-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white">
            Contact Information
          </h3>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-blue-400 text-lg" />
            <span>Gulstan-E-Johar Block 18</span>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaPhoneAlt className="text-blue-400 text-lg" />
            <a href="tel:+923042507846" className="hover:underline">
              +92-304-2507846
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <FaEnvelope className="text-blue-400 text-lg" />
            <a href="mailto:jethanandj52@gmail.com" className="hover:underline">
              jethanandj52@gmail.com
            </a>
          </div>

          <div className="pt-6 text-center ">
            
            <div className="flex justify-center   gap-15 text-2xl text-center">
              <a href="https://facebook.com/jethanand.malhi.94" target="_blank" rel="noreferrer" className="text-blue-400 hover:scale-110 transition"><FaFacebookF /></a>
              <a href="https://instagram.com/jeth_anandmalhi" target="_blank" rel="noreferrer" className="text-pink-400 hover:scale-110 transition"><FaInstagram /></a>
              <a href="https://linkedin.com/in/jethanand-malhi-319ba9212/" target="_blank" rel="noreferrer" className="text-blue-500 hover:scale-110 transition"><FaLinkedinIn /></a>
              <a href="https://github.com/Jethanandj52" target="_blank" rel="noreferrer" className="text-gray-300 hover:scale-110 transition"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
