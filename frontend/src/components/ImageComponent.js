"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const ImageComponent = ({
  imageName,
  className = "",
  altName = "",
  skeletonHeight = 200,
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    if (imageName && process.env.NEXT_PUBLIC_API_URL) {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL.replace("/api", "");
      setImageSrc(`${baseUrl}/uploads/${imageName}`);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  }, [imageName]);

  if (hasError) {
    return (
      <div
        className={`w-full bg-gray-200 flex items-center justify-center ${className}`}
        style={{ height: skeletonHeight }}
      >
        <p className="text-gray-500">Image not found</p>
      </div>
    );
  }

  return (
    <div>
      {isLoading && <Skeleton height={skeletonHeight} width="100%" />}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={altName}
          className={className}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
};

export default ImageComponent;
