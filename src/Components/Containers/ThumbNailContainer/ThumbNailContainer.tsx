import React from "react";
import { ThumbNail } from "../../IndividualComponents/Thumbnail/ThumbNail";

interface PhotoAttrs {
  src: string;
  alt: string;
  bigImg: string;
  className: string;
}

interface ThumbNailContainerProps {
  photos: PhotoAttrs[];
  handler: React.MouseEvent<Element, MouseEvent>;
}

export const ThumbNailContainer = ({
  photos,
  handler,
  bigImg
}: ThumbNailContainerProps) => {
  const thumbnails = photos.map((photo, index) => {
    return <ThumbNail key={index} onClick={handler} {...photo} />;
  });

  return <div id="thumbnails">{thumbnails}</div>;
};
