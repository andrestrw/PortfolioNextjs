import Image from "next/image";
import React from "react";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  altText,
  projectLink,
  //delay,
}) => {
  return (
    <div
    //className={`aos-init ${delay ? `aos-delay-${delay}` : ""}`}
    //data-aos="fade-up"
    >
      {/* overflow-hidden indica cómo  manejar el contenido que sobrepasa los límites de un elemento, establece que cualquier contenido que exceda los límites del elemento (su caja de contenido) será recortado y no será visible fuera de este límite. */}

      <div id="works" className=" overflow-hidden text-white ">
        <div className="relative h-64">
          <Image
            style={{
              objectFit: "contain",
            }}
            src={imageSrc}
            alt={altText}
            fill={true}
            className="rounded-t-lg"
            placeholder="blur"
            blurDataURL="/img/GenZ_scala_black_interna_468.png"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw "
          />
        </div>
        <div className="p-6 text-center ">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold- hover:underline text-center block mx-auto"
          >
            Abrir proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
