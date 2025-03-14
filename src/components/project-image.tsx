"use client";

import { useState } from "react";
import Image from "next/image";

const ProjectImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className={`relative ${className} h-auto w-auto`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center rounded bg-gray-200">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}

      <Image
        width={0}
        height={0}
        src={src}
        alt={alt}
        className={`h-full w-full rounded-lg object-cover transition-opacity duration-500 ease-in-out ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setImageLoaded(true)}
        unoptimized
      />
    </div>
  );
};

export default ProjectImage;
