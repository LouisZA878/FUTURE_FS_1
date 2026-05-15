"use client";

import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const activeState = toggle ? "open" : "closed";

  return (
    <nav className={activeState}>
      <ul className="container-links">
        <li>
          <Link href="#about" aria-label="About me">
            <IoPersonCircle />
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link href="#experience" aria-label="Experience">
            <FaNetworkWired />
            <span>Experience</span>
          </Link>
        </li>
        <li>
          <Link href="#projects" aria-label="Projects">
            <CgWebsite />
            <span>Projects</span>
          </Link>
        </li>
      </ul>
      <button className="menu-links" onClick={handleClick} type="button">
        <AiOutlineMenuFold />
      </button>
    </nav>
  );
};

export default Navbar;
