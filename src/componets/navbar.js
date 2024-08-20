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
      <nav className="bg-black border-gray-600 border-b-2 text-white p-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={toggleSidebar} className="text-white pl-2 md:pl-8">
            {sidebarOpen ? (
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
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
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
            )}
          </button>
          <div className="text-xl ml-10 md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-yellow-200 to-cyan-800">
            APTO API
          </div>
        </div>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full md:w-auto p-2 md:mr-20 mt-4 md:mt-0">
          <li>
            <Link
              href="/api-hub"
              className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/api-hub"
              className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
            >
              Who Are We
            </Link>
          </li>
          <li>
            <Link
              href="/api-hub"
              className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/api-hub"
              className="text-xl border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-white-500 hover:rounded-md"
            >
              Contact
            </Link>
          </li>
         
        </ul>
      </nav>
      <div
        className={`fixed inset-0 z-40 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="w-64 sm:w-80 flex-auto sm:mt-[73px] bg-black h-full shadow-md p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4 mt-8">
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-md"
              >
                API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-md"
              >
                Youtube Thumbnail
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-md"
              >
                Your API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-md"
              >
                API Hub
              </Link>
            </li>
            <li>
              <Link
                href="/api-hub"
                className="text-white border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-md"
              >
                Youtube Thumbnail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
