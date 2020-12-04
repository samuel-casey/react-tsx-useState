import React from "react";

interface ThumbNailProps {
  src: string;
  alt: string;
  bigImg: string;
  onClick: React.MouseEvent<HTMLImageElement, MouseEvent>;
}

export const ThumbNail = ({ src, alt, bigImg, onClick }: ThumbNailProps) => {
  console.log(bigImg);
  return (
    <img style={{}} className="thumb" src={src} alt={alt} onClick={onClick} />
  );
};
