import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} N. M. Azizur Rahman. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
      
          <a
            href="https://www.linkedin.com/in/n-m-azizur-rahman-a00652340/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
