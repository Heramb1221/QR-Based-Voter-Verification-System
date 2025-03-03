import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Dashboard = () => {
  const user = {
    fullName: "John Doe",
    dob: "1990-05-15",
    gender: "Male",
    fatherHusbandName: "Robert Doe",
    voterId: "V123456789",
    pinCode: "110001",
    mobile: "+91 9876543210",
    photo: "/Logo.png",
  };

  const [time, setTime] = useState(new Date());
  const upcomingElection = {
    date: "2025-04-15",
    location: "New Delhi",
    type: "General Election",
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Time & Election Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-700">Current Time & Location</h2>
          <p className="text-gray-700 mt-2">Time: {time.toLocaleTimeString()}</p>
          <p className="text-gray-700">Location: New Delhi, India</p>
          <h2 className="text-xl font-bold text-blue-700 mt-4">Upcoming Election</h2>
          <p className="text-gray-700">Date: {upcomingElection.date}</p>
          <p className="text-gray-700">Location: {upcomingElection.location}</p>
          <p className="text-gray-700">Type: {upcomingElection.type}</p>
        </div>

        {/* Right Section - User Details Card */}
        <Card user={user} />
      </div>

      {/* Additional Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-blue-700">Additional Information</h2>
        <p className="text-gray-700 mt-2">Ensure your voter details are up to date before the upcoming election.</p>
        <p className="text-gray-700">For any discrepancies, contact the Election Commission.</p>
      </div>
    </div>
  );
};

export default Dashboard;
