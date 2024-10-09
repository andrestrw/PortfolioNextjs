import Container from "./container";

const AboutSection = () => {
  return (
    <Container>
      <section
        id="aboutme"
        className="min-h-[80vh] px-4 lg:px-20 flex justify-center items-center "
      >
        <div className="flex flex-col">
          {/* Iconos Superiores */}

          {/* Contenido Principal */}

          <p className="    text-sm md:text-xl     inline-block text-white">
            ¿Estás en busca de alguien perseverante y dedicado? A lo largo de mi
            trayectoria profesional, he descubierto que la regla fundamental es
            que la disciplina constante siempre da resultados positivos.
            <br />
            <br />
            Después de varios años en el sector de las telecomunicaciones,
            decidí cambiar mi rumbo profesional y enfocarme en la programación,
            atraído por los desafíos y la creatividad que ofrece este sector.
            <br />
            <br />
            Me formé trabajando como desarrollador full stack en una agencia de
            marketing digital, paralelamente cursé un máster en desarrollo web
            avanzado de más de 180 horas y actualmente trabajo para una empresa
            multinacional como implementador de software.
            <br />
            <br />
            En este proceso, adquirí habilidades avanzadas en diversas
            tecnologías, entre las que se incluyen:
          </p>

          <div className=" px-2 my-6 text-white ">
            <ol className="list-none space-y-2">
              <li className="  text-sm md:text-xl   ">
                · Lenguajes de Programación:
                <span className="text-blue-500">JavaScript</span>
                <span className="text-blue-500">TypeScript</span>
                <span className="text-blue-500">PHP</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Frameworks y Bibliotecas:{" "}
                <span className="text-blue-500">React.js</span>
                <span className="text-blue-500">Next.js</span>
                <span className="text-blue-500">jQuery</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Servidores y Entorno de Desarrollo:{" "}
                <span className="text-blue-500">Node.js</span>,
                <span className="text-blue-500">MySQL</span>
                <span className="text-blue-500">MySQL Workbench</span>
                <span className="text-blue-500">MongoDB</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Estilos y Diseño: <span className="text-blue-500">CSS</span>,{" "}
                <span className="text-blue-500">Bootstrap</span>
                <span className="text-blue-500">Tailwind</span>
                <span className="text-blue-500">Figma</span>
                <span className="text-blue-500">Adobe Illustrator</span>
                <span className="text-blue-500">Adobe Photoshop</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Herramientas de Control de Versiones:{" "}
                <span className="text-blue-500">Git</span>
                <span className="text-blue-500">Git Flow</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Integración de Datos:{" "}
                <span className="text-blue-500">
                  Integración de llamadas a APIs
                </span>
                , <span className="text-blue-500">JSON</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Plataformas y Despliegue:{" "}
                <span className="text-blue-500">Vercel</span>
                <span className="text-blue-500">Firebase</span>
                <span className="text-blue-500">Netlify</span>.
              </li>
              <li className="    text-sm md:text-xl   ">
                · Comunicación en Tiempo Real:{" "}
                <span className="text-blue-500">Socket.io</span>.
              </li>
            </ol>
          </div>

          <p className="    text-sm md:text-xl     inline-block text-white">
            Si deslizas hacia abajo, podrás visualizar todos mis trabajos.
          </p>

          <br />

          {/* Iconos Inferiores */}
        </div>
      </section>
    </Container>
  );
};

export default AboutSection;
