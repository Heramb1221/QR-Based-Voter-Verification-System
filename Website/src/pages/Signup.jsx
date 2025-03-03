import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    fatherHusbandName: '',
    voterId: '',
    houseNo: '',
    street: '',
    locality: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    governmentId: null,
    profilePhoto: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6 h-2 rounded-lg overflow-hidden bg-gray-300">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${(step / 3) * 100}%`,
            background: 'linear-gradient(to right, blue, white, green)',
          }}
        ></div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-4">Personal Details</h2>
            <label className="block mb-2 font-semibold">Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter full name" className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">Date of Birth *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-2 border rounded mb-4">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="block mb-2 font-semibold">Father’s/Husband’s Name *</label>
            <input type="text" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleChange} required placeholder="Enter name" className="w-full p-2 border rounded mb-4" />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-4">Address Details</h2>
            <label className="block mb-2 font-semibold">Voter ID Number *</label>
            <input type="text" name="voterId" value={formData.voterId} onChange={handleChange} required placeholder="Enter voter ID" className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">House/Flat Number *</label>
            <input type="text" name="houseNo" value={formData.houseNo} onChange={handleChange} required placeholder="Enter house number" className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">Street Name *</label>
            <input type="text" name="street" value={formData.street} onChange={handleChange} required placeholder="Enter street name" className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">Pin Code *</label>
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} required placeholder="Enter pin code" className="w-full p-2 border rounded mb-4" />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-4">Contact & Security</h2>
            <label className="block mb-2 font-semibold">Mobile Number *</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter mobile number" className="w-full p-2 border rounded mb-4" />

            <label className="block mb-2 font-semibold">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter email" className="w-full p-2 border rounded mb-4" />
          </div>
        )}

        <div className="flex justify-center space-x-4 mt-6">
          {step > 1 && <button type="button" onClick={handleBack} className="px-6 py-2 bg-gray-400 text-white rounded">Back</button>}
          {step < 3 ? (
            <button type="button" onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded">Next</button>
          ) : (
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded">Submit</button>
          )}
        </div>
      </form>

      <p className="mt-4">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>Login here</span></p>
    </div>
  );
};

export default Signup;