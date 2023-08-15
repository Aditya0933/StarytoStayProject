import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-gray-900 py-28'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4 text-white'>
          <div className='sm:flex text-center justify-between items-center text-white'>
            <h2 className='my-3 text-white'>StrayToStay.</h2>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4 py-5'>
              <FaFacebook className='icon text-white' />
              <FaTwitter className='icon text-white' />
              <FaYoutube className='icon text-white' />
              <FaPinterest className='icon text-white' />
              <FaInstagram className='icon text-white' />
            </div>
          </div>
          <div className='flex justify-between'>
    <ul className='lg:flex text-white'>
      <li>About Us</li>
      <li>Partnerships</li>
      <li>Volunteer</li>
      <li>News & Events</li>
      <li>Support Us</li>
    </ul>
    <ul className='text-right lg:flex text-white'>
      <li>Home</li>
      <li>Adopt</li>
      <li>Donate</li>
      <li>Volunteer</li>
      <li>Contact</li>
    </ul>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
