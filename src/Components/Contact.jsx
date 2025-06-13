import React from "react";
import { Mail, Linkedin, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-tr from-blue-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Let's Connect</h2>
        <p className="text-gray-700 text-lg mb-8">
          I'm always open to discussing new opportunities, exciting projects, or collaborations.
          Whether it's a job offer, freelance work, or just a hello — feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left text-gray-800 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Institutional Address</h3>
            <p>Department of Yarn Engineering,</p>
            <p>Bangladesh University of Textiles (BUTEX),</p>
            <p>Tejgaon, Dhaka-1208, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Permanent Address</h3>
            <p>465/2, West Kazipara (Miapara),</p>
            <p>Brahmanbaria, Brahmanbaria-3400, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Phone</h3>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+8801624164021" className="hover:underline">+8801624164021</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Email & Blog</h3>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:azizhridoy79@gmail.com" className="hover:underline">azizhridoy79@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Globe size={16} />
              <a href="http://nmazizur.blogspot.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                nmazizur.blogspot.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="mailto:azizhridoy79@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-medium transition"
          >
            <Mail size={18} /> Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/golam-kibria-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} N. M. Azizur Rahman. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
