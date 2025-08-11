import React from "react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">

      <motion.h1
        className="text-6xl font-extrabold mb-4 text-pink-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-gray-500 max-w-md text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.a
        href="/"
        className="inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-pink-700 rounded-xl font-medium hover:from-pink-600 hover:to-pink-800 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Go Home
      </motion.a>
    </section>
  );
};

export default ErrorPage;
