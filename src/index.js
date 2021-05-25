import ReactDOM from "react-dom";
import React from "react";
import Carousel from "./carousel";

let data = [
  {
    img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    // text: "d0",
  },
  {
    // text: "d1",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    // text: "d2",
    img: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    // text: "d3",
    img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];
const render = (data) => {
  if (data.img)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <img
          src={data.img}
          style={{ objectFit: "cover", height: "100%", width: "400px" }}
        />
        <p style={{ color: "blue" }}>{data.text}</p>
      </div>
    );
  return <p>{data.text}</p>;
};
ReactDOM.render(
  <div style={{ width: "100vw", height: 500 }}>
    <Carousel
      dataArray={data}
      buttonStyle={{ borderRadius: "50%", height: 50, border: "none" }}
      renderFunc={render}
    />
  </div>,
  document.getElementById("root")
);
