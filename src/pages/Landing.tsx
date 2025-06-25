import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Heart,
  TrendingUp,
  Star,
  Globe,
  Target,
} from "lucide-react";
import SlideIn from "../components/Layout/SlideIn";

const HomePage: React.FC = () => {
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" duration={800} delay={200}>
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                  End-to-End Excellence for Healthcare
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-primaryGreen mb-6 leading-tight">
                  Transforming Healthcare
                  <span className="text-green-600"> Across Africa</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Synergy Health Solutions delivers future-ready,
                  patient-centric hospital solutions—designed, built, and
                  managed for impact. We partner with governments and private
                  stakeholders to create the healthcare systems Africa needs and
                  deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-50 transition-colors">
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
                    className="w-full bg-primaryGreen text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={600} delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primaryGreen mb-4">
                Why Choose Synergy Health Solutions
              </h2>
            </div>
          </SlideIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn direction="left" duration={600} delay={200}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryGreen mb-3">
                  Africa-Focused
                </h3>
                <p className="text-gray-600">
                  Tailoring international standards to local realities across
                  African healthcare markets
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="bottom" duration={600} delay={400}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="w-16 h-16 bg-primaryRed rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryGreen mb-3">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600">
                  Complete healthcare infrastructure lifecycle from concept to
                  long-term management
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={600} delay={600}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryGreen mb-3">
                  Patient-First
                </h3>
                <p className="text-gray-600">
                  Patient-centered care at the heart of every strategy and
                  implementation
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* PBCM Framework Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Our Proven Methodology
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                The PBCM Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A 360° methodology designed for hospital excellence - from
                strategic planning to operational management
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: "P",
                title: "Plan",
                desc: "Strategic blueprints for healthcare facility needs",
                color: "green",
                delay: 200,
              },
              {
                letter: "B",
                title: "Build",
                desc: "Modern infrastructure with cutting-edge technology",
                color: "blue",
                delay: 400,
              },
              {
                letter: "C",
                title: "Commission",
                desc: "Rigorous facility activation and testing",
                color: "purple",
                delay: 600,
              },
              {
                letter: "M",
                title: "Manage",
                desc: "Ongoing management for operational excellence",
                color: "red",
                delay: 800,
              },
            ].map((item, index) => (
              <SlideIn
                key={index}
                direction="bottom"
                duration={600}
                delay={item.delay}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {item.letter}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primaryGreen mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primaryGreen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Impact Across Africa
              </h2>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                Transforming healthcare landscapes and building stronger, more
                sustainable health systems
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <SlideIn direction="left" duration={600} delay={200}>
              <div className="p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Improved Patient Outcomes
                </h3>
                <p className="text-green-100">
                  Enhanced quality of care through modern infrastructure and
                  efficient management systems
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="bottom" duration={600} delay={400}>
              <div className="p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Enhanced Hospital Sustainability
                </h3>
                <p className="text-green-100">
                  Financial viability and operational excellence ensuring
                  long-term success
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={600} delay={600}>
              <div className="p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Strengthened Health Systems
                </h3>
                <p className="text-green-100">
                  Comprehensive solutions serving both urban and rural
                  communities effectively
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-primaryRed">
        <SlideIn direction="bottom" duration={800} delay={200}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              "Tomorrow's healthcare starts with today's decisions. Let's build
              better, together."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </SlideIn>
      </section>
    </div>
  );
};

export default HomePage;
