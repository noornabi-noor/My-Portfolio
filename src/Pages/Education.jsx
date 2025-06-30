import React from "react";

const Education = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-primary font-extrabold mb-4">Education</h2>
        <p className="text-lg mb-8">
          My academic journey in the field of Computer Science & Engineering.
        </p>

        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-1">
            BSc in Computer Science & Engineering
          </h3>
          <p className="text-gray-700 font-medium">
            Jatiya Kabi Kazi Nazrul Islam University
          </p>
          <p className="text-sm text-gray-500">
            Expected Graduation: <strong>December 2025</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Current Year: <strong>4th Year</strong> &nbsp; | &nbsp; CGPA (upto 3rd year): <strong>3.43</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
