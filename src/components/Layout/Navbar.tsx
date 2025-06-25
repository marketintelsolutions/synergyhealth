import React, { useEffect, useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  currentPage?: string;
}

const navigation = [
  { name: "Home", href: "/", id: "" },
  { name: "About", href: "/about", id: "about" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Contact", href: "/contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = window.location;

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => setCurrentPage(pathname.split("/")[1]), [pathname]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primaryGreen">Synergy</h1>
                <p className="text-xs text-red-600">Health Solutions</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-primaryGreen border-b-2 border-green-600"
                      : "text-gray-700 hover:text-primaryGreen"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primaryRed text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started
              </a>
            </div>
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
