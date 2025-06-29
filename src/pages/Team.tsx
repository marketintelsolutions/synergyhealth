import React, { useEffect, useState } from "react";
import TeamMemberModal from "../components/About/TeamMemberModal";
import TeamMember from "../components/About/TeamMember";
import { useDisclosure } from "../hooks/useDisclosure";
import SharedBanner from "../components/Layout/SharedBanner";

const team = [
  {
    name: "Chris Oshiafi",
    img: "/images/chris.jpg",
    desc: [
      "The Chief Executive Officer comes with over two decades of experience in Structured Finance, Consulting, Investment Banking and Venture Capital/Private Equity. He holds a 2nd Class (Upper Division) in Accounting & Finance from the University of London and a Master of Business Administration degree from the University of Lagos. ",
      "He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Insurance Institute of London, (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He also attended various programs at the prestigious Columbia Business School, New York, United States and INSEAD Business School, Fontainebleau, France, the IESE Business School in Barcelona, Spain and the Chief Executive Programme (CEP 17) Class of the Lagos Business School. ",
      "He was the Pioneer Managing Director/CEO of Truebond Investments & Capital Limited, a Company with diverse interests in Oil & Gas, Telecommunications, Power and the Capital Markets. He has also worked with the firm of Damitop Consulting Limited as Managing Partner where he worked on a number of World Bank projects for the Federal and several State Governments. He served as Executive Director (Investment Banking) of Citizens International Bank (now Heritage Bank Limited) until his appointment as the pioneer Chief Executive Officer of PanAfrican Capital Holdings Limited. ",
    ],
  },
  {
    name: "Sina Alimi",
    img: "/images/sina.jpg",
    desc: [
      "Sina has considerable experience in Deal Structuring, Project Finance, Mergers & Acquisitions, Privatization and Asset Management. He is an Alumnus of the Lagos Business School’s Chief Executive Programme (CEP 18) and IESE Business School, Barcelona, Spain. He holds a Bachelor of Science degree in Accounting (Second Class Upper) from the prestigious University of Lagos in 1989.",
      "He is also a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Chartered Institute of Taxation of Nigeria (CITN). He joined the Investment Banking Division of Fountain Trust Bank Plc in 1997 and subsequently served as Group Head, Corporate Finance and Head, Investment Banking Group. While in Corporate Finance, he was actively involved in high profile projects and advisory mandates in the private sector as well as the privatization programme of the Federal Government of Nigeria.",
    ],
  },
  {
    name: "Eric Okoruwa",
    img: "/images/eric.jpg",
    desc: [
      "Eric holds a master’s degree in marketing and a bachelor’s degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited.",
      "He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
    ],
  },
  {
    name: "Nentok Gomwalk",
    img: "/images/nentok.jpg",
    desc: [
      "Eric holds a master’s degree in marketing and a bachelor’s degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited.",
      "He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
    ],
  },
];

const Team = () => {
  const [selected, setSelected] = useState({ name: "", img: "", desc: [""] });
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const teammemberModal = useDisclosure();

  return (
    <section>
      <SharedBanner
        heading="Synergy Health Solutions - The Team"
        text="We're not just building hospitals. We're building healthier
              futures across Africa."
      />

      <p className="mt-24 px-6 lg:px-0 text-xl md:text-2xl font-medium max-w-max mx-auto text-justify">
        At Synergy Health, we pride ourselves on having a leadership team that
        combines a diverse range of experiences, expertise, and passion for
        innovation. Our Board and Management teams work collaboratively to drive
        the company’s vision forward, to ensure sustainable growth, and to
        maintain the highest standards of governance and ethical conduct
      </p>

      <div className="flex gap-20 justify-center items-center pt-20 pb-40 flex-wrap max-w-[1300px] mx-auto">
        {team.map((member, index) => (
          <div onClick={() => setSelected(member)}>
            <TeamMember
              {...member}
              teammemberModal={teammemberModal}
              key={index}
            />
          </div>
        ))}
      </div>

      {teammemberModal.isOpen && (
        <TeamMemberModal {...selected} modal={teammemberModal} />
      )}
    </section>
  );
};

export default Team;
