import React from 'react';
import { NavLink } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import logo from '/images/mainlogo.png';
import homeIcon from '/images/home.png';

const NavBar = () => {
  return (
    <div className='bg-[#1a73e8] p-2 w-full'>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

        <NavLink to='/' className="flex items-center ml-5 cursor-pointer">
          <img src={logo} alt="Logo" width={50} height={50} className="mr-2"/>
          <h1 className='text-xl font-bold text-white'>QRVotify</h1>
        </NavLink>

        <div className='flex items-center space-x-10 mr-12'>
          <NavLink to='/' className="flex items-center space-x-2 text-white hover:text-gray-300 transition">
            <img src={homeIcon} alt="Home" width={20} height={20}/>
            <p className='text-lg font-medium'>Home</p>
          </NavLink>
          <NavLink to='/login'>
            <button className="flex h-[40px] w-[102px] items-center gap-x-2 px-4 py-2 bg-[#f8f9fa] text-[#212529] font-semibold border border-[#f8f9fa] rounded-lg shadow-md hover:bg-gray-200 transition">
              Login
              <FiLogIn />
            </button>
          </NavLink>
          <NavLink to='/signup'>
            <button className="flex h-[40px] items-center gap-x-2 px-4 py-2 bg-[#f8f9fa] text-[#212529] font-semibold border border-[#f8f9fa] rounded-lg shadow-md hover:bg-gray-200 transition">
              Sign-Up
              <FiUserPlus />
            </button>
          </NavLink>
          <NavLink to='/about-us' className="text-lg font-medium text-white hover:text-gray-300 transition">
            About Us
          </NavLink>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;
