import React from "react";

// React Icons
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="container mx-auto flex justify-between mb-16">
        <div>
          {/* Logo */}
          <div className="mb-3">
            <img
              className="h-11"
              src={require("../../Images/Footer Logo.png")}
              alt="logo"
            />
          </div>
          <p className="text-sm text-[#5C5F6A]">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <ul className="mt-8 flex gap-6">
            <li>
              <a href="#">
                <FaGithub className="h-6 w-6 text-[#5C5F6A]" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="h-6 w-6 text-[#5C5F6A]" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="h-6 w-6 text-[#5C5F6A]" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-[#878A92] font-medium text-sm mb-10">
            support
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">FAQ</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Terms of User</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-[#878A92] font-medium text-sm mb-10">
            company
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">About us</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Contact</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-[#878A92] font-medium text-sm mb-10">
            shop
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">My Account</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Checkout</a>
            </li>
            <li className="text-[#5C5F6A] font-medium text-sm">
              <a href="">Cart</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-[#878A92] font-medium text-sm mb-10">
            accepted payments
          </h2>
          <ul className="flex items-center gap-4">
            <li className="text-[#5C5F6A] font-medium">
              <a href="">
                <GrAmex className="text-[#5C5F6A] h-8 w-8" />
              </a>
            </li>
            <li className="text-[#5C5F6A] font-medium">
              <a href="">
                <SiMastercard className="text-[#5C5F6A] h-8 w-14" />
              </a>
            </li>
            <li className="text-[#5C5F6A] font-medium">
              <a href="">
                <RiVisaLine className="text-[#5C5F6A] h-8 w-11" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="container mx-auto border-t border-gray-50 text-center py-7">
        <p className="text-[#5C5F6A] text-sm">
          © 2023 DevCut. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
