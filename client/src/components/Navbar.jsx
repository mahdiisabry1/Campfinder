import { MenuIcon, UserCircleIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-xl font-bold">
                Campfinder
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-gray-200">
                Home
              </a>
              <a href="/about" className="text-white hover:text-gray-200">
                About
              </a>
              <a href="/services" className="text-white hover:text-gray-200">
                Services
              </a>
              <a href="/contact" className="text-white hover:text-gray-200">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white flex items-center hover:text-gray-200 cursor-pointer">
                <UserCircleIcon className="h-6 w-6 mr-1" />
                Sign in
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="/services"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
