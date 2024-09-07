"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import demoImage from "@/public/img/demo_image.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineMenu, AiOutlineClose as CloseIcon } from "react-icons/ai";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  async function fetchUser() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/user/${session?.user?._id}`
      );
      const resData = await res.json();
      setUserData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [session?.user?._id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShowDropdown = () => setShowDropdown(true);
  const handleHideDropdown = () => setShowDropdown(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="https://www.tnpgndec.com/images/logo.png?7815db646ca0534ab35486f8bcc24983"
            alt="T&P Logo"
            height={50}
            width={50}
            className="rounded"
          />
          <h3 className="text-xl font-bold">
            Training & <span className="text-blue-400">Placement Cell</span>
          </h3>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <CloseIcon size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Links */}
        <ul
          className={`${menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 bg-gray-800 w-full md:w-auto md:bg-transparent py-2 md:py-0`}
        >
          <li>
            <Link
              href="/blog"
              className={`${pathname === "/blogs" ? "text-blue-400 font-bold" : ""
                } hover:text-blue-300 block md:inline py-2 md:py-0`}
            >
              Posts
            </Link>
          </li>

          {session?.user ? (
            <>
              <li>
                <Link
                  href="/create-blog"
                  className={`${pathname === "/create-blog" ? "text-blue-400 font-bold" : ""
                    } hover:text-blue-300 block md:inline py-2 md:py-0`}
                >
                  Create
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <Image
                  onClick={handleShowDropdown}
                  src={userData?.avatar?.url ? userData?.avatar?.url : demoImage}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full cursor-pointer"
                />

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-lg shadow-lg">
                    <AiOutlineClose
                      onClick={handleHideDropdown}
                      className="w-6 h-6 p-1 ml-auto cursor-pointer"
                    />
                    <div className="p-3">
                      <Link
                        href={`/user/${session?.user?._id.toString()}`}
                        className="block hover:bg-gray-100 p-2 rounded-md"
                        onClick={handleHideDropdown}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          handleHideDropdown();
                        }}
                        className="w-full mt-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className={`${pathname === "/login" ? "text-blue-400 font-bold" : ""
                    } hover:text-blue-300 block md:inline py-2 md:py-0`}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={`${pathname === "/signup" ? "text-blue-400 font-bold" : ""
                    } hover:text-blue-300 block md:inline py-2 md:py-0`}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
