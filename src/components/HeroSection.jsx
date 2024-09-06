"use client";

import Image from "next/image";
import Container from "./container";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [imageSrc, setImageSrc] = useState("/img/mobileVersion.jpg");

  useEffect(() => {
    const updateImgSrc = () => {
      if (window.innerWidth < 1532) {
        setImageSrc("/img/mobileVersion.jpg");
      } else {
        setImageSrc("/img/computerVersion.jpg");
      }
    };

    updateImgSrc();

    window.addEventListener("resize", updateImgSrc);
  });

  return (
    <Container>
      <main>
        <section
          // style={{
          //   display: "grid",
          //   gridGap: "80px",
          //   gridTemplateColumns: "repeat(auto-fit, minmax(700px, auto))",
          // }}
          className=" grid gap-x-20 gap-y-8  grid-cols-sm-custom  md:grid-cols-custom  "
        >
          {/* Sección texto */}
          <div
            className=" relative h-auto  min-[1536px]:h-[1020px] flex justify-center items-center "
            // style={{
            //   height: "400px",
            //   position: "relative",
            // }}
          >
            <p className=" text-white fuente-general  text-3xl  text-center  xl:text-7xl  ">
              With an analytical mind, a resolutive approach, and unwavering
              resilience, I am a full stack developer who masters the JavaScript
              ecosystem to turn ideas into digital realities
            </p>
          </div>
          {/* Sección imagen */}
          <div
            className=" h-[400px] min-[1536px]:h-[1020px]"
            //  className="min-[1920px]:h-96  "
            style={{
              position: "relative",
              // height: "1020px",
            }}
          >
            <Image
              alt="Picture "
              src={imageSrc}
              fill
              // height={"100%"}
              sizes="100vw"
              //sizes="(max-width: 768px) 100% (max-width: 1200px) 100%"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default HeroSection;
