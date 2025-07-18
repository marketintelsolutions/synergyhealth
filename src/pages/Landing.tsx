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
import Banner from "../components/Landing/Banner";
import { Link } from "react-router-dom";

const clientTypes = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Government Institutions",
    description:
      "Ministries of Health, public hospitals, and state healthcare boards seeking transformation through public-private partnerships.",
    examples: [
      "Public Hospital Systems",
      "Ministry of Health",
      "Regional Health Authorities",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Private Healthcare Investors",
    description:
      "Entrepreneurs and private entities seeking excellence-driven hospital operations.",
    examples: [
      "Private Hospital Groups",
      "Healthcare Investors",
      "Medical Facility Developers",
    ],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Development Partners & NGOs",
    description:
      "Agencies championing healthcare access and system strengthening.",
    examples: [
      "International NGOs",
      "Development Banks",
      "Healthcare Foundations",
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Banner />

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
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100">
                <div className="w-16 h-16 bg-red-600  rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryRed mb-3">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600">
                  Complete healthcare infrastructure lifecycle from concept to
                  long-term management
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={600} delay={600}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <div className="max-w-[1300] mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Our Proven Methodology
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                The <span className="font-extrabold ">PBCM</span> Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A 360° methodology designed for hospital excellence - from
                strategic planning to operational management
              </p>
            </div>
          </SlideIn>

          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="md:w-[40%] h-[30%] p-8 bg-gradient-to-br from-green-100 to-red-50 rounded-[16px]">
              <img
                src="/images/pbcmimg.jpg"
                alt="pbcm img"
                className="object-cover rounded-[16px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  letter: "p",
                  title: "Plan",
                  desc: "Strategic blueprints for healthcare facility needs",
                  color: "bg-green-500",
                  delay: 200,
                  hover: "hover:bg-green-100",
                },
                {
                  letter: "b",
                  title: "Build",
                  desc: "Modern infrastructure with cutting-edge technology",
                  color: "bg-red-500",
                  delay: 400,
                  hover: "hover:bg-red-100",
                },
                {
                  letter: "c",
                  title: "Commission",
                  desc: "Rigorous facility activation and testing",
                  color: "bg-red-500",
                  delay: 600,
                  hover: "hover:bg-red-100",
                },
                {
                  letter: "m",
                  title: "Manage",
                  desc: "Ongoing management for operational excellence",
                  color: "bg-green-500",
                  delay: 800,
                  hover: "hover:bg-green-100",
                },
              ].map((item, index) => (
                <SlideIn
                  key={index}
                  direction="bottom"
                  duration={600}
                  delay={item.delay}
                >
                  <div
                    className={`bg-white ${item.hover} rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow`}
                  >
                    <div
                      className={`p-2 w-fit ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <img
                        src={`/images/${item.letter}.png`}
                        className="w-[50px] font-bold text-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primaryGreen mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 h-12 text-sm">{item.desc}</p>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative   text-white">
        <div className="sticky top-0 left-0">
          <img
            src="/images/building.jpg"
            alt="image"
            className="w-full h-lvh object-cover"
          />
        </div>
        <div className="bg-[#00000071] py-40 relative z-[2]">
          <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                Who We Work With
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From government institutions to private investors, we partner
                with organizations committed to healthcare excellence.
              </p>
            </div>
          </SlideIn>

          <div className="space-y-8">
            {clientTypes.map((client, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={700}
                delay={200 + index * 200}
              >
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 text-green-600">
                        {client.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primaryGreen mb-2">
                        {client.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-1">
                      <p className="text-gray-600">{client.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primaryGreen mb-3">
                        Examples:
                      </h4>
                      <ul className="space-y-1">
                        {client.examples.map((example, eIndex) => (
                          <li key={eIndex} className="text-gray-600 text-sm">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-100">
        <SlideIn direction="bottom" duration={800} delay={200}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Transform Your Healthcare Project?
            </h2>
            <p className="text-xl text-black/90 mb-8">
              "Tomorrow's healthcare starts with today's decisions. Let's build
              better, together."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/contact"}>
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Schedule Consultation
                </button>
              </Link>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black/10 transition-colors">
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
