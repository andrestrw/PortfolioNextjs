"use client";

import Image from "next/image";
import Container from "./container";

const HeroSection = () => {
  return (
    <Container>
      <main>
        <section className=" grid gap-x-20 gap-y-8  grid-cols-sm-custom  md:grid-cols-custom  ">
          {/* Sección texto */}
          <div className=" relative h-auto  min-[1536px]:h-[1020px] flex justify-center items-center ">
            <p className=" text-white fuente-general  text-3xl  text-center  xl:text-7xl  ">
              With an analytical mind, a resolutive approach, and unwavering
              resilience, I am a full stack developer who masters the JavaScript
              ecosystem to turn ideas into digital realities
            </p>
          </div>
          {/* Sección imagen */}
          <div
            className=" h-[400px] min-[1536px]:h-[1020px]"
            style={{
              position: "relative",
            }}
          >
            <Image
              priority={true}
              alt="Picture "
              src="/img/computerVersion.jpg"
              fill={true}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw "
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
