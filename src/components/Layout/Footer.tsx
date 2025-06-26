import React from "react";
import { Plus, Mail, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryBlack text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex gap-2 items-center mb-4">
              <div className="w-8 h-8 ">
                <img src="/images/logoicon.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Synergy Health Solutions</h3>
                <p className="text-sm text-green-200">
                  ...elevating healthcare, one system at a time
                </p>
              </div>
            </div>
            <p className="text-gray-100 mb-6 max-w-md">
              Transforming healthcare infrastructure across Africa through
              innovative solutions and strategic partnerships.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-300 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-100">
                  <p className="font-medium">8a, Elsie Femi Pearse Street</p>
                  <p>off Adeola Odeku, Victoria Island, Lagos</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-300 mr-3" />
                <p className="text-gray-100">info@synergyhealthsolutions.org</p>
              </div>

              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-300 mr-3" />
                <p className="text-gray-100">www.synergyhealthsolutions.org</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Infrastructure Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Hospital Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Operational Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase">Company</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  PBCM Framework
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-400/20 mt-8 pt-8 text-center">
          <p className="text-sm text-green-200">
            © 2025 Synergy Health Solutions Limited. All rights reserved.
          </p>
          <p className="text-xs text-green-300 mt-2">
            "Tomorrow's healthcare starts with today's decisions. Let's build
            better, together."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
