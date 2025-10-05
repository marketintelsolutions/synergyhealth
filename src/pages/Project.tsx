import React, { useEffect, useState } from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import { GoDotFill } from "react-icons/go";
import { Dot } from "lucide-react";

const images = [
  "ogun1",
  "ogun2",
  "ogun3",
  "ogun4",
  "ogun5",
  "ogun6",
  "ogun7",
  "ogun8",
  "ogun9",
  "ogun10",
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <>
      <SharedBanner
        heading="Our Projects"
        text="We're not just building hospitals. We're building healthier
              futures across Africa."
        img="about"
      />

      <section className="max-w-7xl flex justify-between mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[60%]">
          <h1 className="uppercase text-4xl font-bold ">
            Concession: Ogun hands over specialist hospital to Afrilife’s...
          </h1>
          <p className="text-gray-400 text-lg mt-4">November 16, 2024</p>

          <div className="mt-10">
            <img
              src={`/images/ogun/${images[activeIndex]}.jpg`}
              alt={images[activeIndex]}
            />
          </div>

          <div className="flex flex-col gap-3 mt-5 text-justify">
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio deserunt expedita eius ipsam, at culpa aspernatur
              corrupti? Ea voluptate itaque impedit iusto cum placeat provident.
              Saepe tempora expedita, nisi nam laudantium recusandae assumenda
              aliquam animi omnis, odio obcaecati alias cumque.
            </p>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque,
              necessitatibus nihil animi nam ipsum itaque vitae! Nihil, natus
              aspernatur!
            </p>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam cumque officia nostrum exercitationem veniam, quisquam
              perspiciatis quae vel quaerat quidem veritatis in sed provident
              quo obcaecati doloribus similique excepturi culpa?
            </p>
            <p className="text-lg font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              totam eaque sapiente, praesentium sequi deleniti architecto
              adipisci. Porro exercitationem quas architecto itaque, recusandae
              ex et fugit sapiente quos aspernatur voluptatibus? Illum non
              maiores illo obcaecati nihil commodi perspiciatis aliquid quos
              dignissimos? Temporibus asperiores dicta quam!
            </p>
            <p className="text-lg font-light">
              “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolores eligendi maiores libero at dolorem sed quisquam cumque
              fuga. Labore odio, qui perferendis, amet ipsa tenetur eligendi ex
              delectus quos dolorem at.”
            </p>
            <div className="my-5">
              <img src="/images/ogun/ogun2.jpg" alt="" />
            </div>
            <p className="text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              eum similique quibusdam, asperiores culpa quidem. Hic cum libero
              itaque neque eaque id sed at, ratione consectetur debitis
              voluptatem, quisquam odio quibusdam. Eos explicabo impedit, quam
              minus accusamus in officia corrupti excepturi dolorum, voluptates
              dicta debitis?
            </p>
            <p className="text-lg font-light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis possimus ut consectetur eos, ducimus, non totam
              laboriosam id dolore iusto in dolorem reiciendis odio accusamus
              voluptatem soluta sequi excepturi porro voluptatum explicabo.
              Ratione, nobis? Id ratione vero eos, temporibus dolor ullam
              voluptates itaque quibusdam fuga asperiores est, excepturi
              adipisci repudiandae molestiae pariatur, facilis tempore deserunt
              corrupti neque atque. Officia neque tenetur suscipit hic dolore
              dolorum temporibus eligendi autem dolorem ipsum.”
            </p>
            <p className="text-lg font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              dolorum sint id eaque quia minus fugiat repudiandae dolor
              provident eligendi, exercitationem voluptate laboriosam ipsum
              quas, temporibus, maxime similique autem repellendus quam iste!
              Accusantium fugiat error dolore, sit sint consectetur
              reprehenderit?
            </p>
            {/* <p className="text-lg font-light">
              For more images and videos of the event please see the links
              below:
            </p> */}
          </div>
          {/* <div className="flex gap-4 mt-5">
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://drive.google.com/drive/folders/1czTMVihgAYBtHB10Fqvq22WtrmgP2Vuo?usp=drive_link"
            >
              Images
            </a>
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://drive.google.com/drive/folders/1vj1VJDTTR9kM67yzx87e9qNMWC6npl9b?usp=sharing"
            >
              More Images
            </a>
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://businessday.ng/news/article/concession-ogun-hands-over-specialist-hospital-to-afrilifes-viewpoint/"
            >
              More News
            </a>
          </div> */}
        </div>
        <div className="w-full max-w-[380px]">
          <h2 className="text-3xl font-bold">Latest Projects</h2>

          <div className="flex gap-2 mt-10 border-b pb-10">
            <span>
              <Dot />
            </span>
            <div className=" flex flex-col gap-2">
              <p className="flex items-center italic gap-1 text-sm text-primaryBlue">
                <span>November 16, 2024</span>
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                cum totam minima. Laboriosam, eveniet omnis
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
