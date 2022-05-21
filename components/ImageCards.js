import React from "react";
import Image from "next/image";

function ImageCards({ src, alt, width, height, blurData, sourceLink }) {
  return (
    <figure className="py-2 [break-inside:avoid]">
      <a href={sourceLink}>
        <Image
          className="rounded-md"
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={blurData}
        />
      </a>
    </figure>
  );
}

export default ImageCards;
