import React from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="p-6 sm:p-10 min-h-screen  sm:mb-10  ">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Have questions or suggestions? I'd love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto items-stretch">
        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 text-left">
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Personal Info */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-center md:text-left space-y-5 text-gray-700 dark:text-gray-300">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
            Personal Information
          </h3>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-blue-600 mx-auto md:mx-0" />
            <span>Gulstan-E-Johar Block 18</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
            <FaPhoneAlt className="text-blue-600 mx-auto md:mx-0" />
            <a href="tel:+923042507846" className="hover:underline">
              +92-304-2507846
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
            <FaEnvelope className="text-blue-600 mx-auto md:mx-0" />
            <a href="mailto:jethanandj52@gmail.com" className="hover:underline">
              jethanandj52@gmail.com
            </a>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
              Follow Me
            </h4>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-blue-600">
              <a href="https://facebook.com/jethanand.malhi.94" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com/jeth_anandmalhi" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com/in/jethanand-malhi-319ba9212/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com/Jethanandj52" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
