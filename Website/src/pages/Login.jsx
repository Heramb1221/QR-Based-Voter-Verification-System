import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('voterId');
  const [formData, setFormData] = useState({
    voterId: '',
    password: '',
    mobile: '',
    otp: '',
    captchaVerified: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setFormData({ ...formData, captchaVerified: !!value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.captchaVerified) {
      alert('Please verify CAPTCHA');
      return;
    }
    console.log('Login Data:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h2>

        {/* Toggle Login Method */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLoginMethod('voterId')}
            className={`px-4 py-2 ${loginMethod === 'voterId' ? 'bg-blue-600 text-white' : 'bg-gray-300'} rounded-l-lg`}
          >
            Voter ID
          </button>
          <button
            onClick={() => setLoginMethod('mobile')}
            className={`px-4 py-2 ${loginMethod === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-300'} rounded-r-lg`}
          >
            Mobile OTP
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {loginMethod === 'voterId' ? (
            <>
              <label className="block mb-2 font-semibold">Voter ID *</label>
              <input type="text" name="voterId" value={formData.voterId} onChange={handleChange} required placeholder="Enter Voter ID" className="w-full p-2 border rounded mb-4" />

              <label className="block mb-2 font-semibold">Password *</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter Password" className="w-full p-2 border rounded mb-4" />
            </>
          ) : (
            <>
              <label className="block mb-2 font-semibold">Mobile Number *</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter Mobile Number" className="w-full p-2 border rounded mb-4" />
              <button type="button" className="w-full bg-blue-500 text-white py-2 rounded mb-4">Generate OTP</button>

              <label className="block mb-2 font-semibold">Enter OTP *</label>
              <input type="text" name="otp" value={formData.otp} onChange={handleChange} required placeholder="Enter OTP" className="w-full p-2 border rounded mb-4" />
            </>
          )}

          {/* CAPTCHA */}
          <div className="flex justify-center mb-4">
            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptcha} />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
