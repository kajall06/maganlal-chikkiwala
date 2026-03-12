import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6"; 
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10 pt-10">
     <div className="border-b-2 border-[#ED3237]   ">
    <div className="mb-4 flex flex-col lg:flex-row items-center justify-between gap-4 pb-3 text-sm px-4">

  <div className="flex items-center gap-3">
   <FaPaperPlane className="text-lg sm:text-xl md:text-2xl shrink-0" />
    <p className="uppercase text-center lg:text-left">
      <span className="font-bold">Sign up to newsletter</span> and receive{" "}
      <span className="text-[#ED3237] font-bold">Surprise Coupons</span> for first shopping
    </p>
  </div>

  <div className="w-full max-w-md">
    <div className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md outline-none text-sm"
      />
      <button className="bg-[#ED3237] px-4 rounded-r-md flex items-center justify-center">
        <FaEnvelope className="text-white text-lg" />
      </button>
    </div>
  </div>

  <div className="flex gap-4 text-lg">
    <FaFacebookF className="cursor-pointer hover:text-[#ED3237]" />
    <FaTwitter className="cursor-pointer hover:text-[#ED3237]" />
    <FaPinterest className="cursor-pointer hover:text-[#ED3237]" />
    <FaInstagram className="cursor-pointer hover:text-[#ED3237]" />
  </div>

</div>
</div>
      <div className="max-w-7xl mt-6 px-4 sm:px-6 lg:px-8 ">
        {/* Grid sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">

          {/* About / Logo */}
          <div>
            <img
              src="/image1.png" // Make sure this is in public/
              alt="Logo" 
              className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto mx-auto md:mx-0"
            />
            <p className="text-sm leading-6 mt-2  text-[#666]">
            A Legacy of 100+ years, sweetening people’s life…
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl  mb-4 text-[#666]">Quick Navigation</h1>
            <ul className="text-[13px]  text-[#666]">
              <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-700">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-700">Contact Us</Link></li>
              <li><Link href="/shop" className="hover:text-gray-700">Shop</Link></li>
            </ul>
          </div>

          {/* Services / Extra Links */}
          <div>
            <h1 className="text-xl  mb-4 text-[#666]">Important Links</h1>
            <ul className="text-[13px]  text-[#666]">
              <li><a href="#" className="hover:text-gray-700">Disclaimer Policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Terms and Conditions</a></li>
               <li><a href="#" className="hover:text-gray-700">Shipping and Delivery Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h1 className="text-xl  mb-4 text-[#666]">Contact</h1>
            <p className="text-[#666] ">Maganlal Chikki Products Pvt Ltd</p>
            <p className="text-[#666] text-[13px]">Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401 Dist. Pune
Online store:- www.maganlalchikki.in</p>
            <p className="text-sm leading-6 text-[#666]">
   
      <span className="inline-flex  gap-2">
  <FaPhone className="text-xl  text-[#ED3237] " />Ph. No. :- +912114274060 I Mobile No. :- +917666530969</span>
             Contact Time: 9 AM to 6 PM<br />
             Factory Closed - Thursday <br/>
              <span className="inline-flex items-center gap-2">
  <FaEnvelope className="text-[#ED3237] " />sales@maganlalchikki.in</span>
            </p>
          </div>

        </div>

      
        
      </div>
     <div className="bg-[#222] text-white mt-6">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center md:text-left">
    
    {/* Left Side */}
    <div>
      © {new Date().getFullYear()}{" "}
      <span className="text-[#ED3237]">www.maganlalchikki.in</span>. 
      Powered By{" "}
      <span className="text-[#ED3237]">Reallaunchers.com.</span> 
      All rights reserved.
    </div>

    {/* Right Side Image */}
    <div>
      <img 
        src="/img1.png" 
        alt="payment methods" 
        className="h-6 mx-auto md:mx-0"
      />
    </div>

  </div>
</div>
    </footer>
  );
};

export default Footer;