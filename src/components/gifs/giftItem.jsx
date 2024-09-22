"use client";

import Image from "next/image";

const GifItem = ({ title, url, props }) => {
  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.03)",
        display: "flex",
        flexDirection: "column",
        height: "0%",
        justifyContent: "center",
        marginBottom: "20px",
        marginRight: "20px",
        overflow: "hidden",
      }}
    >
      <Image
        src={url}
        alt={title}
        width={500}
        height={200}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw "
        unoptimized
      />
      <p
        style={{
          backgroundColor: "white",
          flex: "1",
          fontSize: "1.5rem",
          marginTop: "5px",
          padding: "5px 20px 0px 20px",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default GifItem;
