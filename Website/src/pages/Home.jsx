import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdVerified } from "react-icons/md";
import { MdQrCode2 } from "react-icons/md";
import { GrSelection } from "react-icons/gr";

const Home = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white px-6 py-10" style={{ backgroundImage: "url('/images/homebackground.png')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg text-center w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">Secure & Reliable QR-Based Voter Verification</h1>
          <p className="text-lg mb-6 text-gray-300">Register today and get your unique QR code for a seamless voting experience.</p>
          <NavLink to="/signup" className="bg-[#ffc107] text-dark px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#e0a800] transition">
            Get Started <FiArrowRight className="inline ml-2" />
          </NavLink>
        </div>
      </div>

      {/* Live Voting Section */}
      <div className='bg-slate-50 w-11/12 mx-auto rounded-t-2xl border border-lime-200 mt-10'>
        <h2 className="text-2xl font-bold text-primary mb-4 bg-[#19567C] text-center py-4 mx-auto rounded-t-2xl">Live Voting Statistics</h2>
        <div className="mx-auto py-8 text-center">
          <div className="grid mr-6 ml-6 grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <MdVerified className="text-6xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary">12,345</h3>
              <p className="text-gray-700">Verified Voters</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <MdQrCode2 className="text-6xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-600">9,876</h3>
              <p className="text-gray-700">QR Codes Generated</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center justify-center">
              <GrSelection className="text-6xl text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-red-500">15</h3>
              <p className="text-gray-700">Elections Conducted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <h2 className="text-2xl font-bold text-primary mb-4 bg-[#19567C] w-11/12 text-center mt-10 py-4 mx-auto rounded-t-2xl">Why Choose QRVotify?</h2>
      <div className="max-w-6xl mx-auto py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-dark">Unique QR Code</h3>
            <p className="text-gray-600">Every voter gets a secure, tamper-proof QR code for authentication.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-dark">Seamless Verification</h3>
            <p className="text-gray-600">Officials can scan your QR code to verify your identity instantly.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-dark">Election Security</h3>
            <p className="text-gray-600">Ensuring transparency and security in the voting process.</p>
          </div>
        </div>
      </div>

      {/* Process Workflow Section */}
      <div className='bg-gray-300 w-11/12 mx-auto rounded-t-2xl border border-slate-700'>
        <h2 className="text-2xl font-bold text-primary mb-4 bg-[#19567C] text-center py-4 mx-auto rounded-t-2xl">How It Works</h2>
        <div className="py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 shadow-md rounded-lg bg-white">
                <h3 className="text-lg font-semibold text-dark">Step 1</h3>
                <p className="text-gray-600">Register on the platform and provide your details.</p>
              </div>
              <div className="p-6 shadow-md rounded-lg bg-white">
                <h3 className="text-lg font-semibold text-dark">Step 2</h3>
                <p className="text-gray-600">Receive your unique QR-based voter ID.</p>
              </div>
              <div className="p-6 shadow-md rounded-lg bg-white">
                <h3 className="text-lg font-semibold text-dark">Step 3</h3>
                <p className="text-gray-600">Officials scan the QR code for verification.</p>
              </div>
              <div className="p-6 shadow-md rounded-lg bg-white">
                <h3 className="text-lg font-semibold text-dark">Step 4</h3>
                <p className="text-gray-600">Vote securely with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-dark mb-4">Get Ready for a Secure Voting Experience!</h2>
        <NavLink to="/signup" className="bg-blue-400 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
          Register Now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;