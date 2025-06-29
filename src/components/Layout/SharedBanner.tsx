import React from "react";
import SlideIn from "./SlideIn";

const SharedBanner: React.FC<{
  img?: string;
  heading: string;
  text: string;
}> = ({ img = "pagebanner", heading, text }) => {
  return (
    <section
      className="h-[550px]  text-primaryGreen"
      style={{
        backgroundImage: `url(/images/${img}.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-full pt-44 pb-32 bg-primaryGreen/20 ">
        <SlideIn direction="top" duration={800} delay={200}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{heading}</h1>
              <p className="text-2xl text-black max-w-3xl mx-auto">{text}</p>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default SharedBanner;
