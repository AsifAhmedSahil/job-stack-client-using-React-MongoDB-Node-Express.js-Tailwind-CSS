import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary" },
    { path: "/post-job", title: "Post a job" },
  ];
  return (
    <header className="container mx-auto max-w-screen-2xl xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="text-2xl">
          JobStack
        </a>

        {/* Navitem for large  */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up and login btn */}

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link className="px-5 py-2 border rounded" to="/login">
            Log In
          </Link>
          <Link
            className="px-5 py-2 border rounded bg-blue text-white"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>

        {/* for mobile menu style */}
        <div className="md:hidden block">
          <button onClick={handleToggle}>
            {isMenuOpen ? (
              <HiMiniXMark className="w-5 h-5 text-primary" />
            ) : (
              <IoMenu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      <div className={`px-4 py-5 bg-black rounded-sm text-white ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white first:text-white py-1">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1"><Link to="/login">
            Log In
          </Link></li>
        </ul>

        

      </div>
    </header>
  );
};

export default Navbar;
