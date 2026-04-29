import React from "react";
import { motion } from "framer-motion";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error("Route error:", error);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">

      <motion.h1
        className="text-6xl font-extrabold mb-4 text-pink-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Oops!
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {error?.status === 404 ? "Page Not Found" : "An error occurred"}
      </motion.h2>

      <motion.div
        className="text-red-500 max-w-lg text-left bg-gray-100 p-4 rounded-lg overflow-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="font-bold mb-2 text-gray-700">Error Details:</p>
        <p>{error?.statusText || error?.message || "Unknown Error"}</p>
        {error?.stack && (
          <pre className="mt-2 text-xs text-gray-600 bg-white p-2 rounded border border-gray-300">
            {error.stack}
          </pre>
        )}
      </motion.div>

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
