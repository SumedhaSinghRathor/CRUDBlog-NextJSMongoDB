"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex gap-2">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              width={40}
              height={40}
              className="bg-white rounded-full"
              alt="Next.js Logo"
            />
            <Image
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              width={40}
              height={40}
              alt="MongoDB Logo"
            />
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu size={20} />
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:justify-end gap-8 flex-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link className="flex items-center gap-2" href="/">
              <AiOutlineHome size={20} /> Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" href="/posts">
              <MdOutlinePostAdd size={20} /> Posts
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" href="/posts/create">
              <AiOutlinePlusCircle size={20} /> Add New Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
