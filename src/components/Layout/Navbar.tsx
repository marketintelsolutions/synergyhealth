import React, { useEffect, useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  currentPage?: string;
}

const navigation = [
  { name: "About", href: "/about", id: "about" },
  { name: "Team", href: "/team", id: "team" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Contact", href: "/contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = window.location;

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => setCurrentPage(pathname.split("/")[1]), [pathname]);

  return (
    <nav className="sticky top-0 w-full bg-white  backdrop-blur-[3.5px] shadow-sm z-50">
      <div className="max-w-7xl py-3 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-0 justify-between items-center ">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="w-full max-w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  w-[65%] justify-between">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-2 text-lg font-bold transition-colors ${
                    currentPage === item.id
                      ? "text-primaryRed border-b-2 border-primaryRed"
                      : "text-gray-600 hover:text-primaryGreen"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Link to={"/contact"}>
              <button className="bg-primaryRed text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primaryGreen"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  currentPage === item.id
                    ? "text-primaryGreen bg-green-50"
                    : "text-gray-700 hover:text-primaryGreen"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primaryRed text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
