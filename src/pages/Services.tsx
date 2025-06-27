import React from "react";
import {
  Building,
  Users,
  TrendingUp,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";
import SlideIn from "../components/Layout/SlideIn";
import { Link } from "react-router-dom";
import SharedBanner from "../components/Layout/SharedBanner";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Healthcare Infrastructure Development",
      icon: <Building className="w-8 h-8" />,
      color: "green",
      features: [
        "Turnkey hospital construction",
        "Health facility renovation and expansion",
        "Medical equipment planning and integration",
        "Medical Tourism, I.T & Training",
      ],
    },
    {
      title: "Hospital & Clinic Management",
      icon: <Users className="w-8 h-8" />,
      color: "blue",
      features: [
        "Full-spectrum hospital operations",
        "Performance optimization",
        "Health workforce planning & HR solutions",
        "Quality management systems",
      ],
    },
    {
      title: "Strategic Consulting",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "purple",
      features: [
        "Feasibility studies",
        "Market entry strategy",
        "Regulatory compliance advisory",
        "Business case development",
      ],
    },
    {
      title: "Operational Audits & Performance Reviews",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "red",
      features: [
        "Quality assurance assessments",
        "Financial and clinical audits",
        "Patient satisfaction evaluations",
        "Process optimization reviews",
      ],
    },
  ];

  const pbcmSteps = [
    {
      phase: "PLAN",
      title: "Strategic Planning",
      description:
        "Tailored strategic blueprints to meet healthcare facility needs and regulatory standards.",
      quote: "We don't just plan. We future-proof.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      phase: "BUILD",
      title: "Infrastructure Development",
      description:
        "Construction of modern healthcare infrastructure using cutting-edge technology and sustainable practices.",
      quote: "Strong foundations. Smarter futures.",
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      phase: "COMMISSION",
      title: "System Activation",
      description:
        "Rigorous facility activation, testing all systems for optimal functionality and compliance.",
      quote: "We turn structures into life-saving ecosystems.",
      icon: <Settings className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      phase: "MANAGE",
      title: "Operational Excellence",
      description:
        "Ongoing management services to ensure top-tier operations, patient care, and financial sustainability.",
      quote: "Seamless operations. Sustainable outcomes.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <SharedBanner
        heading="Our Services"
        text="Comprehensive healthcare solutions designed to transform Africa's
              healthcare landscape through innovation, expertise, and strategic
              partnerships."
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From infrastructure development to ongoing management, we
                provide end-to-end solutions for healthcare excellence.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={600}
                delay={200 + index * 200}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6 text-${service.color}-600`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primaryGreen mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-green-600 font-medium hover:text-green-700 flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* PBCM Framework Detail */}
      <section className="relative overflow-hidden py-20 bg-gray-50">
        <div className="w-full h-full   absolute top-0 left-0 flex justify-center items-center">
          <img
            src="/images/dna.jpg"
            alt="dna"
            className="object-cover pt-0  w-full"
          />
        </div>
        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-6xl font-bold text-primaryGreen mb-6">
                Our PBCM Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven 360° methodology designed for hospital excellence,
                ensuring every project delivers measurable impact.
              </p>
            </div>
          </SlideIn>

          <div className="space-y-12">
            {pbcmSteps.map((step, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={700}
                delay={200 + index * 200}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mr-4`}
                        >
                          <span className="text-2xl font-bold text-white">
                            {step.phase[0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primaryGreen">
                            {step.title}
                          </h3>
                          <p className={`text-gray-600 font-medium`}>
                            {step.phase}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <p className={`text-gray-600 font-medium italic`}>
                        "{step.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    {/* <div
                      className={`w-32 h-32 ${step.color} rounded-full flex items-center justify-center mx-auto text-gray-200`}
                    >
                      {step.icon}
                    </div> */}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're building from scratch or optimizing operations,
                Synergy Health Solutions is your partner in progress.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn direction="left" duration={600} delay={200}>
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryGreen mb-4">
                  Government Institutions
                </h3>
                <p className="text-gray-600">
                  Ministries of Health, public hospitals, and state healthcare
                  boards seeking transformation through public-private
                  partnerships.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="bottom" duration={600} delay={400}>
              <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                <div className="w-16 h-16 bg-primaryRed rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryRed mb-4">
                  Private Healthcare Investors
                </h3>
                <p className="text-gray-600">
                  Entrepreneurs and private entities seeking excellence-driven
                  hospital operations and sustainable returns.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={600} delay={600}>
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primaryGreen mb-4">
                  Development Partners & NGOs
                </h3>
                <p className="text-gray-600">
                  Agencies championing healthcare access and system
                  strengthening across African communities.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-primaryRed text-white">
        <SlideIn direction="bottom" duration={800} delay={200}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss how our comprehensive solutions can address your
              specific healthcare challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Request Proposal
              </button>
            </div>
          </div>
        </SlideIn>
      </section>
    </div>
  );
};

export default ServicesPage;
