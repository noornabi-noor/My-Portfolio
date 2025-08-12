import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_formspree_key);

  return (
    <section
      id="contact"
      className="rounded-none md:rounded-3xl shadow-lg md:shadow-2xl py-10 md:py-16 px-4 sm:px-6 md:px-20 mx-auto max-w-7xl"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
        📬 Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Contact Information */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Contact Information
          </h3>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-gray-900 dark:text-gray-100 text-lg mt-1 flex-shrink-0" />
            <p className="text-base sm:text-lg">noornabinoor1770@gmail.com</p>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-gray-900 dark:text-gray-100 text-lg mt-1 flex-shrink-0" />
            <p className="text-base sm:text-lg">
              +8801751321770 (Phone / WhatsApp)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-gray-900 dark:text-gray-100 text-lg mt-1 flex-shrink-0" />
            <p className="text-base sm:text-lg">Mymensingh, Bangladesh</p>
          </div>

          <p className="text-sm sm:text-md mt-4 text-gray-600 dark:text-gray-300">
            I'm open to freelance, collaboration, or just a friendly chat. Don't
            hesitate to drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg space-y-3 sm:space-y-4"
        >
          {state.succeeded && (
            <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-md">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <div>
            <label
              className="block mb-1 text-sm sm:text-base font-medium"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label
              className="block mb-1 text-sm sm:text-base font-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              className="block mb-1 text-sm sm:text-base font-medium"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-primary text-white text-sm sm:text-base rounded-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer hover:bg-[#c40e6b] "
          >
            {state.submitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
