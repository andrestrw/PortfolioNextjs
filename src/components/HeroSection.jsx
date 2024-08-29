import Image from "next/image";
import Container from "./container";

const HeroSection = () => {
  return (
    <Container>
      <main style={{ minHeight: "100vh" }}>
        <section
          style={{
            display: "grid",
            gridGap: "80px",
            gridTemplateColumns: "repeat(auto-fit, minmax(700px, auto))",
          }}
        >
          {/* Sección texto */}
          <div
            style={{
              height: "400px",
              position: "relative",
            }}
          >
            <p className=" text-white fuente-general  text-7xl  leading-snug">
              With an analytical mind, a resolutive approach, and unwavering
              resilience, I am a full stack developer who masters the JavaScript
              ecosystem to turn ideas into digital realities
            </p>
          </div>
          {/* Sección imagen */}
          <div
            style={{
              position: "relative",
              height: "1020px",
            }}
          >
            <Image
              alt="Picture "
              src="/img/IMG3580.jpg"
              fill
              // height={"100%"}
              sizes="100vw"
              //sizes="(max-width: 768px) 100% (max-width: 1200px) 100%"
              style={{
                objectFit: "cover",
                objectPosition: "0px -60px",
              }}
            />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default HeroSection;
