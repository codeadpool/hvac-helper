"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="bg-[#f5f5f7] text-black py-12 px-4 sm:px-6 lg:px-8 font-mono">
  <div className="max-w-7xl mx-auto">
  <div className="border-t border-black mt-12 pt-8 text-center" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {/* Brand Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">HVAC Helper</h2>
        <p className="text-lg leading-relaxed">
          Reliable heating, cooling, and ventilation solutions for every season.
        </p>
      </div>

      {/* Quick Links */}
      <nav aria-label="Quick links">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Why Us", path: "/why-us" },
              { name: "FAQs", path: "/faqs" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-blue-400 transition-colors duration-200 text-lg"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Contact Info */}
      <div className="space-y-4 ">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="flex-shrink-0" />
            <a
              href="https://maps.google.com/?q=123+HVAC+Street+Columbus+CO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              123 HVAC Street
              <br />
              Columbus, CO
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="flex-shrink-0" />
            <a
              href="tel:1234567890"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              (123) 456-7890
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="flex-shrink-0" />
            <a
              href="mailto:support@hvachelper.com"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              support@hvachelper.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Follow Us</h3>
        <div className="flex space-x-6">
          {[
            { Icon: FaFacebookF, label: "Facebook", url: "#" },
            { Icon: FaTwitter, label: "Twitter", url: "#" },
            { Icon: FaInstagram, label: "Instagram", url: "#" },
            { Icon: FaLinkedinIn, label: "LinkedIn", url: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 text-2xl"
              aria-label={`Visit our ${social.label} page`}
            >
              <social.Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="mt-12 pt-8 text-center">
      <p>
        © {new Date().getFullYear()} HVAC Helper. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
