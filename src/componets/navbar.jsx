"use client";
import { useState } from "react";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav className="bg-black border-gray-600 border-b-2 text-white p-3 flex items-center justify-between">
        <div className="flex items-center space-x-32">
          <button onClick={toggleSidebar} className="text-white pl-40">
            <svg
              className="w-18 h-8"
              fill="none"
              stroke="gray"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-300 to-blue-300">
            APTO API
          </div>
        </div>

        <ul className="flex space-x-4 items-center">
          <Link
            href="/api-hub"
            className="hover:text-gray-800 text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out  hover:bg-white hover:border-white-500 hover:rounded-md"
          >
            Home
          </Link>
          <Link
            href="/api-hub"
            className="hover:text-gray-800 text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out  hover:bg-white hover:border-white-500 hover:rounded-md"
          >
            who are we
          </Link>

          <Link
            href="/api-hub"
            className="hover:text-gray-800 text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out  hover:bg-white hover:border-white-500 hover:rounded-md"
          >
            Pricing
          </Link>

          <Link
            href="/api-hub"
            className="hover:text-gray-800 text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out  hover:bg-white hover:border-white-500 hover:rounded-md"
          >
            Contact
          </Link>
          <li>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </li>
        </ul>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="w-80 bg-black h-full shadow-md p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="text-white mb-4" onClick={toggleSidebar}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="space-y-12 mt-8">
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:rounded-md"
              >
                API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:rounded-md"
              >
                Youtube Thumbail
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white  border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:rounded-md"
              >
                Your API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:rounded-md"
              >
                API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:rounded-md"
              >
                Youtube Thumbail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
