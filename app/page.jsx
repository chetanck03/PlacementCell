"use client"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for carousel
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; // Icons for arrows
import img1 from "@/public/img/img1.jpg"; // Add your images here
import img2 from "@/public/img/img2.jpg"; 
import img3 from "@/public/img/img3.jpg"; 

export default function Home() {
  return (
    <div className="bg-[#121d1e] text-white container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      {/* Text Section */}
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs text-white">Training & Placement Cell</p>
        <h1 className="pb-5 text-5xl font-bold">
           <span className="special-word text-blue-500">GNDEC</span><br />
          Placement Platform
        </h1>
        <p className="text-gray-300 text-lg">
          Unlock your potential with our comprehensive placement services, where creativity meets opportunity. Join us in shaping a brighter future.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full m-3 md:basis-1/3">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showArrows={true}
          showStatus={false}
          className="relative"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <MdArrowBackIos
                onClick={onClickHandler}
                className="absolute left-0 z-10 text-white text-4xl bg-[#121d1e] p-2 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <MdArrowForwardIos
                onClick={onClickHandler}
                className="absolute right-0 z-10 text-white text-4xl bg-[#121d1e] p-2 rounded-full cursor-pointer top-1/2 transform -translate-y-1/2"
              />
            )
          }
        >
          <div>
            <Image
              src={img1}
              alt="Image 1"
              className="w-full h-[400px] object-cover md:h-[500px]" // Adjust height for laptop screens
            />
          </div>
          <div>
            <Image
              src={img2}
              alt="Image 2"
              className="w-full h-[400px] object-cover md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="Image 3"
              className="w-full h-[400px] object-cover md:h-[500px]"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
