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
import SharedBanner from "../components/Layout/SharedBanner";

const AboutPage: React.FC = () => {
  const values = [
    {
      letter: "C",
      title: "Collaboration",
      desc:
        "We build partnerships that drive progress and create lasting impact.",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-green-500",
      delay: 200,
      hover: "hover:bg-green-100",
    },
    {
      letter: "A",
      title: "Accountability",
      desc:
        "We deliver on our word with integrity and take responsibility for outcomes.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-red-500",
      delay: 400,
      hover: "hover:bg-red-100",
    },
    {
      letter: "R",
      title: "Respect",
      desc: "We honor people, culture, and context in everything we do.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-red-500",
      delay: 400,
      hover: "hover:bg-red-100",
    },
    {
      letter: "E",
      title: "Excellence",
      desc:
        "We go beyond expectations, always striving for the highest standards.",
      icon: <Star className="w-6 h-6" />,

      color: "bg-green-500",
      delay: 200,
      hover: "hover:bg-green-100",
    },
  ];

  const pillars = [
    {
      title: "Innovation",
      description:
        "Integrating advanced technologies and global best practices.",
      icon: <Lightbulb className="w-8 h-8" />,
      hover: "hover:bg-red-100",
    },
    {
      title: "Sustainability",
      description:
        "Building systems that are economically, socially, and environmentally viable.",
      icon: <Recycle className="w-8 h-8" />,
      hover: "hover:bg-green-100",
    },
    {
      title: "Local Relevance",
      description:
        "Solutions tailored to community needs and cultural dynamics.",
      icon: <MapPin className="w-8 h-8" />,
      hover: "hover:bg-red-100",
    },
    {
      title: "Operational Excellence",
      description:
        "Optimizing every function from management to patient experience.",
      icon: <Target className="w-8 h-8" />,
      hover: "hover:bg-green-100",
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <SharedBanner
        heading="About Synergy Health Solutions"
        text="We're not just building hospitals. We're building healthier
              futures across Africa."
      />

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
              <div className="bg-gradient-to-br from-green-100 to-red-50 p-8 rounded-2xl">
                <img
                  src="/images/aboutbanner.jpg"
                  alt="woman sitting"
                  className="rounded-2xl"
                />
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
                  <h3 className="text-2xl font-bold text-primaryRed">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 md:h-[100px] leading-relaxed">
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
                <p className="text-lg h-[100px] text-gray-600 leading-relaxed">
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
                <div
                  className={`text-center p-6 rounded-xl ${pillar.hover} border border-gray-200 hover:shadow-lg transition-shadow`}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primaryGreen mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 h-20">{pillar.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="top" duration={700} delay={100}>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Our Core Values: C.A.R.E
              </div>
              <h2 className="text-2xl md:max-w-[70%] mx-auto lg:text-3xl font-bold text-primaryGreen mb-6">
                At Synergy Health Solutions, we are guided by our foundational
                values that drive everything we do.
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             
              </p> */}
            </div>
          </SlideIn>

          <div className="flex flex-wrap gap-10 items-center">
            <div className="w-full md:w-[55%] p-8 bg-gradient-to-br from-green-100 to-red-50 rounded-[16px]">
              <img
                src="/images/pbcmimg.jpg"
                alt="pbcm img"
                className="w-full object-cover rounded-[16px]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {values.map((item, index) => (
                <SlideIn
                  key={index}
                  direction="bottom"
                  duration={600}
                  delay={200 + index * 200}
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
