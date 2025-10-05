import React from "react";
import SlideIn from "./SlideIn";

const SharedBanner: React.FC<{
  img?: string;
  heading: string;
  text: string;
}> = ({ img = "pagebanner", heading, text }) => {
  return (
    <section
      className="h-[550px] relative "
      style={{
        backgroundImage: `url(/images/${img}.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute h-full w-full top-0 left-0  bg-black/20 "></div>
      <div className="h-full pt-[240px] relative z-[2] pb-32 bg-primaryGreen/20 ">
        <SlideIn direction="top" duration={800} delay={200}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl bg-black/40 rounded-[15px] py-5 px-3 text-white lg:text-6xl font-bold mb-6">
                {heading}
              </h1>
              <p className="text-2xl font-bold text-white rounded-[12px] bg-black/30 py-4 px-3 max-w-3xl mx-auto">
                {text}
              </p>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default SharedBanner;
