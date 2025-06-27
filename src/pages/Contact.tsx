import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Globe,
  Phone,
  Clock,
  Users,
  Building,
  Heart,
  Send,
  MessageCircle,
} from "lucide-react";
import SlideIn from "../components/Layout/SlideIn";
import SharedBanner from "../components/Layout/SharedBanner";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: [
        "8a, Elsie Femi Pearse Street",
        "off Adeola Odeku, Victoria Island",
        "Lagos, Nigeria",
      ],
      color: "bg-green-100",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        "info@synergyhealthsolutions.org",
        "General Inquiries & Partnerships",
      ],
      color: "bg-red-100",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online",
      details: [
        "www.synergyhealthsolutions.org",
        "LinkedIn: Synergy Health Solutions",
      ],
      color: "bg-green-100",
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}

      <SharedBanner
        heading="Let's Build a Healthier Future"
        text=" Partner with Synergy Health Solutions to create the healthcare
              systems Africa needs and deserves. Tomorrow's healthcare starts
              with today's decisions."
      />
      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to transform healthcare infrastructure? We're here to help
                you every step of the way.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <SlideIn
                key={index}
                direction="bottom"
                duration={600}
                delay={200 + index * 200}
              >
                <div className="text-center p-8 bg-gray-50 h-[280px] rounded-xl hover:shadow-lg transition-shadow">
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 `}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primaryGreen mb-4">
                    {method.title}
                  </h3>
                  {method.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideIn direction="left" duration={700} delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-primaryGreen">
                    Start Your Healthcare Transformation
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization*"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
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
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country*"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Service of Interest</option>
                      <option value="infrastructure">
                        Healthcare Infrastructure
                      </option>
                      <option value="management">Hospital Management</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="audits">Operational Audits</option>
                      <option value="pbcm">Complete PBCM Solution</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your project, challenges, or how we can help transform your healthcare facility..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </SlideIn>

            {/* Additional Info */}
            <SlideIn direction="right" duration={700} delay={400}>
              <div className="space-y-8">
                <div className="bg-primaryGreen text-white p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold mb-4">
                    Why Partner With Us?
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primaryGreen">
                          ✓
                        </span>
                      </div>
                      <span>
                        Years of Combined Experience in hospital administration
                        and infrastructure development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primaryGreen">
                          ✓
                        </span>
                      </div>
                      <span>
                        Africa-Focused, Globally Inspired approach to healthcare
                        solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primaryGreen">
                          ✓
                        </span>
                      </div>
                      <span>
                        Patient-First Mindset driving every strategy and
                        implementation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primaryGreen">
                          ✓
                        </span>
                      </div>
                      <span>
                        Strong Strategic Backing through PAC Holdings
                        partnerships
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="text-xl font-bold text-primaryGreen">
                      Response Time
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours. For
                    urgent matters, please indicate in your message.
                  </p>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="text-primaryGreen font-medium italic">
                      "Let's build better, together."
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
      {/* Client Types */}
    </div>
  );
};

export default ContactPage;
