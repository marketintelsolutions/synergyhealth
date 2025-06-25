import React from "react";
import { Plus, Mail, MapPin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryGreen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Synergy Health Solutions</h3>
                <p className="text-sm text-green-200">
                  ...elevating healthcare, one system at a time
                </p>
              </div>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              Transforming healthcare infrastructure across Africa through
              innovative solutions and strategic partnerships.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-300 mt-1 mr-3 flex-shrink-0" />
                <div className="text-green-100">
                  <p className="font-medium">8a, Elsie Femi Pearse Street</p>
                  <p>off Adeola Odeku, Victoria Island, Lagos</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-300 mr-3" />
                <p className="text-green-100">
                  info@synergyhealthsolutions.org
                </p>
              </div>

              <div className="flex items-center">
                <Globe className="w-5 h-5 text-green-300 mr-3" />
                <p className="text-green-100">www.synergyhealthsolutions.org</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Infrastructure Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Hospital Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Operational Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  PBCM Framework
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
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
