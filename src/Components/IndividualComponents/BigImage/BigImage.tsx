import React from "react";

interface BigImageProps {
  src: string;
  alt: string;
}

export const BigImage = ({ src, alt }: BigImageProps) => {
  return <img id="bigimage" src={src} alt={alt} />;
};
