import React, { useState } from "react";
import SlideIn from "../Layout/SlideIn";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      //   className="py-40  bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden"
      className="relative py-28  "
      style={{
        backgroundImage: `url(/images/banner.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-55 bg-gradient-to-br from-[#848786] to-[#7a7d80]"></div>
      <div className="relative pt-20 z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" duration={800} delay={200}>
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                End-to-End Excellence for Healthcare
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Healthcare
                <span className="text-white"> Across Africa</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Synergy Health Solutions delivers future-ready, patient-centric
                hospital solutions—designed, built, and managed for impact. We
                partner with governments and private stakeholders to create the
                healthcare systems Africa needs and deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:border-green-700 hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </SlideIn>

          {/* Hero Form */}
          <SlideIn direction="right" duration={800} delay={400}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-primaryGreen mb-6">
                Get Your Free Consultation
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country*"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-primaryGreen text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Banner;
