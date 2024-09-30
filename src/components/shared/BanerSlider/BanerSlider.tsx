import { sliderData } from "@/dataFolder/dataFolder";
import React, { useState, useEffect, CSSProperties } from "react";
import './BanerSlider.css';

interface SliderItem {
  id: string;
  img: string;
  text: string;
}

const HomePageSlider: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const max: number = sliderData.length;

  const intervalBetweenSlides = () => {
    if (autoplay) {
      setActive((prevActive) => (prevActive === max - 1 ? 0 : prevActive + 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000);
    return () => clearInterval(interval);
  }, [autoplay, max]);

  const nextOne = () => setActive((prevActive) => (prevActive < max - 1 ? prevActive + 1 : 0));
  const prevOne = () => setActive((prevActive) => (prevActive > 0 ? prevActive - 1 : max - 1));
  const isActive = (value: number) => (active === value ? 'active' : '');

  const setSliderStyles = (): CSSProperties => {
    const transition = active === max ? 0 : active * -100;
    return {
      width: `${max * 100}vw`,
      transform: `translateX(${transition}vw)`,
    };
  };

  const renderSlides = () =>
    sliderData.map((item: SliderItem, index: number) => (
      <div className={`each-slide ${isActive(index)} slider_home`} key={item.id}>
        <img src={item.img} alt="" />
        <h1 className="slide_h1">{item.text}</h1>
      </div>
    ));

  const renderDots = () =>
    sliderData.map((_, index: number) => (
      <li className={`dots ${isActive(index)}`} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));

  const renderArrows = () => (
    <>
      <button type="button" className="arrows prev" onClick={prevOne}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={nextOne}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </>
  );

  const toggleAutoplay = () => setAutoplay((prev) => !prev);

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
      <button onClick={toggleAutoplay}>
        {autoplay ? "Pause" : "Play"}
      </button>
    </section>
  );
};

export default HomePageSlider;
