import React, { useEffect, useState, useRef } from "react";
import "./carousel.css";

const Carousel = ({
  dataArray,
  renderFunc,
  buttons = false,
  leftButtonText = "previous",
  rightButtonText = "next",
  rightButtonImg = "",
  leftButtonImg = "",
  buttonStyle = {},
  infiniteOptions = true,
}) => {
  const [index, setIndex] = useState(0);
  const [childWidth, setChildWidth] = useState(0);
  const [x, setX] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let width = document.getElementsByClassName("child")[0].offsetWidth;
    setChildWidth(width);
  }, [index]);
  const changeIndex = () => {
    setIndex(Math.round(contentRef.current.scrollLeft / childWidth));
  };
  const handleIndicatorSelect = (i) => {
    contentRef.current.scrollLeft = i * childWidth;
    changeIndex();
  };
  const next = () => {
    if (index + 1 < dataArray.length)
      contentRef.current.scrollLeft += childWidth;
    else contentRef.current.scrollLeft = 0;
    changeIndex();
  };
  const prev = () => {
    if (index - 1 > -1) contentRef.current.scrollLeft -= childWidth;
    else contentRef.current.scrollLeft = (dataArray?.length - 1) * childWidth;
    changeIndex();
  };
  const handleTouchStart = (evt) => {
    if (infiniteOptions) {
      const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
      setX(firstTouch.clientX);
    }
  };
  const handleTouchMove = (evt) => {
    if (infiniteOptions) {
      if (!x) {
        return;
      }

      let xRelease = evt.touches[0].clientX;
      let xDifference = x - xRelease;
      const differnece = 10;

      if (xDifference > differnece && index == dataArray.length - 1) {
        // swipe left
        next();
      } else if (xDifference < -differnece && index == 0) {
        // swipe right
        prev();
      }
      setX(null);
    }
  };
  let data = dataArray?.map((data, i) => (
    <div className="child" key={i}>
      {renderFunc(data)}
    </div>
  ));
  let indicators = dataArray.map((d, i) => (
    <div
      onClick={() => handleIndicatorSelect(i)}
      className={`indicator ${i === index ? "active" : ""}`}
      key={i}
    />
  ));
  return (
    <div className="container">
      <div
        className="content"
        ref={contentRef}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onScroll={() => changeIndex()}
      >
        {data}
      </div>
      <div className="row">{indicators}</div>
      {buttons && (
        <div className="row">
          <button onClick={() => prev()} style={buttonStyle}>
            {leftButtonImg !== "" ? (
              <img src={leftButtonImg} />
            ) : (
              leftButtonText
            )}
          </button>
          <button style={buttonStyle} onClick={() => next()}>
            {rightButtonImg !== "" ? (
              <img src={rightButtonImg} />
            ) : (
              rightButtonText
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
