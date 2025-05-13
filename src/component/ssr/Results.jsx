import React from "react";
import ProductGallery from "@/component/csr/ProductGallery";

const Results = () => {
  const images = [
    "/result1.jpeg",
    "/result2.jpeg",
    "/result3.jpeg",
    "/result4.jpeg",
    "/result5.jpeg",
    "/result6.jpeg",
  ];
  return (
    <div>
      <div
        className="md:flex justify-center hidden bg-black  "
        style={{
          backgroundImage: "url('/certificate-bg.png')", // Replace with the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <ProductGallery images={images} />
      </div>
      <div
        className={"md:hidden bg-black"}
        style={{
          backgroundImage: "url('/certificate-bg.png')", // Replace with the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <ProductGallery images={images} />
      </div>
    </div>
  );
};

export default Results;
