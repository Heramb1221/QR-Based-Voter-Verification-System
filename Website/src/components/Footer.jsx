import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#19567C] text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About QRVotify</h3>
            <p className="text-gray-300 text-sm">
              QRVotify is a secure and reliable QR-based voter verification system ensuring transparency in elections.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-yellow-400">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-yellow-400">Contact</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-yellow-400">FAQ</NavLink></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 text-2xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} QRVotify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
