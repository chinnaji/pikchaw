import React from "react";
import Image from "next/image";

function ImageCards({ src, alt, width, height, blurData, sourceLink }) {
  return (
    <figure className="py-4 [break-inside:avoid]">
      <a href={sourceLink}></a>
      <Image
        className="rounded-md"
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={blurData}
      />
    </figure>
  );
}

export default ImageCards;
