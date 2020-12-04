import React, { useState } from "react";
import { ThumbNailContainer } from "./Components/Containers/ThumbNailContainer/ThumbNailContainer";
import { BigImage } from "./Components/IndividualComponents/BigImage/BigImage";
import "../cities";
import "./styles.css";
import { cities } from "../cities";

interface City {
  src: string;
  alt: string;
}

export default function App() {
  let city: City;
  let setCity: Function;
  [city, setCity] = useState(cities[0]);

  [thumbClass, setThumbClass] = useState("thumb");

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let newCity: City = { src: event.target.src, alt: event.target.alt };
    setCity(newCity);
  };

  return (
    <>
      <div className="App">
        <h1>Cities of the world</h1>
        <ThumbNailContainer
          photos={cities}
          bigImg={city.src}
          handler={handleClick}
        />
        <BigImage src={city.src} alt={`${city.alt} big`} />
      </div>
    </>
  );
}
