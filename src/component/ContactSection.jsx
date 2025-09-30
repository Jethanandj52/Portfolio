'use client';

import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { RootState } from "../redux/store";
// import axios from 'axios';

const ContactSection = () => {
  // const user = useSelector((state: RootState) => state.user.user);
  // const [feedback, setFeedback] = useState("");

  // const fullName = user?.firstName || "";
  // const email = user?.email || "";

  // async function sendMsg(e: React.FormEvent) {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:7000/msg/addMessage', {
  //       fullName,
  //       email,
  //       message: feedback
  //     });
  //     alert('Your message was sent!');
  //     setFeedback("");
  //   } catch (error) {
  //     console.error("Failed to send message:", error);
  //     alert('Failed to send message.');
  //   }
  // }

  return (
    <section className="p-5 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Have questions or suggestions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          // onSubmit={sendMsg}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-6 transition-transform hover:scale-105"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              // value={fullName}
              // disabled
              placeholder='Enter your full name'
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              placeholder='Enter your email address'
              // value={email}
              // disabled
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              // value={feedback}
              // onChange={(e) => setFeedback(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Personal Info + Social */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-6 text-gray-700 dark:text-gray-300 transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Personal Information</h3>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-teal-600" />
            <span>Gulstan-E-Joher Block 18</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-teal-600" />
            <a href="tel:+923001234567" className="hover:underline">+92-304-2507846</a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-600" />
            <a href="mailto:jethanand@example.com" className="hover:underline">jethanandj52@gmail.com</a>
          </div>

          <div className="pt-4 text-center">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Follow Me</h4>
            <div className="flex justify-center gap-4 text-teal-600 text-xl">
              <a href="https://www.facebook.com/jethanand.malhi.94" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/jeth_anandmalhi/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/jethanand-malhi-319ba9212/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com/Jethanandj52" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
