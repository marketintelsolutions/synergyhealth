import React from "react";
import {
  Target,
  Eye,
  Lightbulb,
  Recycle,
  Users,
  MapPin,
  Handshake,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";
import SlideIn from "../components/Layout/SlideIn";

const AboutPage: React.FC = () => {
  const values = [
    {
      letter: "C",
      title: "Collaboration",
      description:
        "We build partnerships that drive progress and create lasting impact.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      letter: "A",
      title: "Accountability",
      description:
        "We deliver on our word with integrity and take responsibility for outcomes.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      letter: "R",
      title: "Respect",
      description: "We honor people, culture, and context in everything we do.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      letter: "E",
      title: "Excellence",
      description:
        "We go beyond expectations, always striving for the highest standards.",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const pillars = [
    {
      title: "Innovation",
      description:
        "Integrating advanced technologies and global best practices.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Sustainability",
      description:
        "Building systems that are economically, socially, and environmentally viable.",
      icon: <Recycle className="w-8 h-8" />,
    },
    {
      title: "Local Relevance",
      description:
        "Solutions tailored to community needs and cultural dynamics.",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Operational Excellence",
      description:
        "Optimizing every function from management to patient experience.",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primaryGreen to-green-800 text-white">
        <SlideIn direction="top" duration={800} delay={200}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About Synergy Health Solutions
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                We're not just building hospitals. We're building healthier
                futures across Africa.
              </p>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" duration={700} delay={200}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Synergy Health Solutions Limited is a Mauritius established
                  company with roots in Africa, pioneering healthcare management
                  and infrastructure consultancy firm dedicated to raising the
                  standard of healthcare delivery across Africa.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With decades of cumulative leadership experience, we partner
                  with governments and private stakeholders to deliver
                  end-to-end hospital solutions tailored for Africa's unique
                  healthcare challenges.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We specialize in delivering turnkey solutions that cover every
                  stage of the healthcare facility lifecycle—from concept and
                  design to commissioning and long-term management.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                    <p className="font-semibold text-primaryGreen">
                      We're not just building hospitals.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                    <p className="font-semibold text-primaryGreen">
                      We're building healthier futures.
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={700} delay={400}>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primaryGreen mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 italic">
                    "Delivering excellent support to strengthen sustainable
                    healthcare value propositions across Africa."
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SlideIn direction="left" duration={600} delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primaryGreen">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading force in transforming healthcare management
                  and infrastructure across Africa—renowned for excellence,
                  innovation, and patient-centered care.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" duration={600} delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primaryGreen">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Delivering excellent support to strengthen sustainable
                  healthcare value propositions across Africa through our proven
                  PBCM methodology.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                Our Value Proposition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Synergy Health Solutions, we believe healthcare excellence
                must be intentional. Our strategic approach ensures every
                project delivers on four key pillars.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <SlideIn
                key={index}
                direction="bottom"
                duration={600}
                delay={200 + index * 150}
              >
                <div className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primaryGreen mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* C.A.R.E Values */}
      <section className="py-20 bg-primaryGreen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Core Values: C.A.R.E
              </h2>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                At Synergy Health Solutions, we are guided by our foundational
                values that drive everything we do.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <SlideIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                duration={600}
                delay={200 + index * 200}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">
                        {value.letter}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {value.title}
                      </h3>
                      <div className="text-green-200">{value.icon}</div>
                    </div>
                  </div>
                  <p className="text-green-100">{value.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>

          <SlideIn direction="bottom" duration={700} delay={800}>
            <div className="text-center mt-12">
              <p className="text-xl italic text-green-100">
                "We don't just deliver services. We deliver trust."
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Strategic Backing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primaryGreen mb-6">
                Strategic Partnerships
              </h2>
            </div>
          </SlideIn>

          <SlideIn direction="bottom" duration={800} delay={300}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primaryGreen mb-4">
                    Strong Alliances & Strategic Backing
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We are proudly affiliated with PAC Holdings, a leading
                    proprietary investment company with strategic ties and
                    partnerships across both local and international markets.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    This alliance strengthens our ability to access global
                    innovations, attract world-class talent, and form joint
                    ventures that accelerate healthcare transformation in
                    Africa.
                  </p>
                  <p className="text-lg text-primaryGreen font-semibold italic">
                    "Our network is your leverage. Through PAC Holdings, we tap
                    into a world of opportunity—bringing global excellence
                    home."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primaryRed rounded-full flex items-center justify-center mx-auto mb-6">
                      <Handshake className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primaryGreen mb-4">
                      Years of Combined Experience
                    </h4>
                    <p className="text-gray-600">
                      In hospital administration, healthcare consulting, and
                      infrastructure development across Africa and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
