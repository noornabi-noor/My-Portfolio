import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="  py-12 px-4 md:px-16 rounded-3xl shadow-2xl"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
          👨‍💻 About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            I'm <span className="font-semibold text-primary">Md. Noornabi</span>,
            a passionate Computer Science & Engineering student at{" "}
            <span className="font-medium">
              Jatiya Kabi Kazi Nazrul Islam University
            </span>. I enjoy crafting impactful software and constantly learning
            cutting-edge technologies to make a difference.
          </p>
          <p>
            I thrive in the world of{" "}
            <span className="font-semibold">full-stack web development (MERN)</span> and{" "}
            <span className="font-semibold">Android app development</span>. Coding isn't
            just what I do — it’s what I love. I'm especially drawn to solving
            complex problems with{" "}
            <span className="font-semibold">algorithms and system design</span>.
          </p>
          <p>
            Currently, I’m diving deeper into:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>🚀 Advanced Data Structures & Algorithms</li>
              <li>🌐 MERN Stack Development</li>
              <li>🧠 System Design & Clean Code</li>
              <li>💻 C# for OOP</li>
            </ul>
          </p>
          <p>
            My dream is to become a skilled software engineer building
            real-world solutions that create positive impact. I also enjoy
            <span className="font-semibold"> competitive programming</span> as a way to
            stay sharp and learn through challenges.
          </p>
          <p>
            And yes—I'm the kind of developer who thinks{" "}
            <span className="italic">debugging is just being a detective in a crime
            movie… where you’re also the murderer. 😄</span>
          </p>
          <p>
            <span className="font-semibold">Let’s connect</span> — if you’re working on
            something cool or want to talk tech, feel free to reach out: <br />
            📫{" "}
            <a
              href="mailto:noornabinoor1770@gmail.com"
              className="text-primary underline hover:text-primary-dark"
            >
              noornabinoor1770@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
