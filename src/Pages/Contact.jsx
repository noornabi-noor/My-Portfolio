import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="rounded-3xl shadow-2xl py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        📬 Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-900 dark:text-gray-100 transition duration-300 text-xl" />
            <p className="text-lg">noornabinoor1770@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-gray-900 dark:text-gray-100 transition duration-300 text-xl" />
            <p className="text-lg">+8801751321770 (Phone / WhatsApp)</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-gray-900 dark:text-gray-100 transition duration-300 text-xl" />
            <p className="text-lg">Mymensingh, Bangladesh</p>
          </div>

          <p className="text-md mt-4 ">
            I’m open to freelance, collaboration, or just a friendly chat. Don’t hesitate to drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xayrqyrp" // Replace this with your Formspree form ID or other backend
          method="POST"
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
