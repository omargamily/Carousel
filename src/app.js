import React from "react";
import Carousel from "./carousel";
const dataArray = [
  {
    img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    text: "carousel tet fragment",
  },
  {
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    text: "d3",
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
        <img src={data.img} style={{ objectFit: "contain", height: "90%" }} />
        <p>{data.text}</p>
      </div>
    );
  return <p>{data.text}</p>;
};
const App = () => {
  return (
    <div style={{ width: "100vw", height: 500 }}>
      <Carousel
        dataArray={dataArray}
        renderFunc={render}
        infiniteOptions={false}
      />
    </div>
  );
};
export default App;
