import React, { useEffect, useState, useRef } from "react";
import "./carousel.css";

const RenderData = ({ data, renderFunc }) =>
  data?.map((data, i) => (
    <div className="child" key={i}>
      {renderFunc(data)}
    </div>
  ));
const Carousel = ({
  dataArray,
  renderFunc,
  buttons = false,
  buttonStyle = {},
  leftButtonText = "previous",
  rightButtonText = "next",
  rightButtonImg = "",
  leftButtonImg = "",
  infiniteOptions = true,
}) => {
  const [index, setIndex] = useState(0);
  const [childWidth, setChildWidth] = useState(0);
  const [x, setX] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const width = document.getElementsByClassName("child")[0].offsetWidth;
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
    const status = index + 1 < dataArray.length;
    if (status) contentRef.current.scrollLeft += childWidth;
    if (!status && infiniteOptions) contentRef.current.scrollLeft = 0;
    changeIndex();
  };
  const prev = () => {
    const status = index - 1 > -1;
    if (status) contentRef.current.scrollLeft -= childWidth;
    if (infiniteOptions && !status)
      contentRef.current.scrollLeft = (dataArray?.length - 1) * childWidth;
    changeIndex();
  };
  const handleTouchStart = (evt) => {
    const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
    setX(firstTouch.clientX);
  };
  const handleTouchMove = (evt) => {
    if (!x) {
      return;
    }
    const xRelease = evt.touches[0].clientX;
    const xDifference = x - xRelease;
    const differnece = 10;

    if (xDifference > differnece && index == dataArray.length - 1) {
      // swipe left
      next();
    } else if (xDifference < -differnece && index == 0) {
      // swipe right
      prev();
    }
    setX(null);
  };
  const mouseDown = (e) => {
    setX(e.clientX);
  };
  const mouseUp = (e) => {
    if (!x) return;
    const xRelease = e.clientX;
    const xDifference = x - xRelease;
    const threshold = 10;
    if (xDifference > threshold) next();
    if (xDifference < -threshold) prev();
    setX(null);
  };
  const indicators = dataArray.map((d, i) => (
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onScroll={changeIndex}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
      >
        <RenderData data={dataArray} renderFunc={renderFunc} />
      </div>
      <div className="row marginTop">{indicators}</div>
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
