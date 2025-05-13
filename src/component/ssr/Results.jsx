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
        className="md:flex justify-center hidden bg-[#09122C]  "

      >
        <ProductGallery images={images} />
      </div>
      <div
        className={"md:hidden bg-[#09122C]"}

      >
        <ProductGallery images={images} />
      </div>
    </div>
  );
};

export default Results;
