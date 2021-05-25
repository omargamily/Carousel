## Description

Responsive carousel component that takes any HTML content and renders them accordingly.

## Installation

In the component's folder

```bash
npm install or yarn
```

then the component

```bash
npm run start or yarn start
```

or import into your project as mentioned below.

## Usage

```React
import ReactDOM from "react-dom";
import React from "react";
import Carousel from "./carousel";

let dataArray = [
  {
    img: "img url",
  },
  {
    img: "img url",
  },
  {
    img: "img url",
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
        <img
          src={data.img}
          style={{ objectFit: "cover", height: "100%", width: "400px" }}
        />
      </div>
    );
  return <p>{data.text}</p>;
};
ReactDOM.render(
  <div style={{ width: "100vw", height: 500 }}>
    <Carousel
      dataArray={dataArray}
      buttonStyle={{ borderRadius: "50%", height: 50, border: "none" }}
      renderFunc={render}
    />
  </div>,
  document.getElementById("root")
);
}
```

### Props

`dataArray` : is an `array` you want to render in the carousel\
`renderFunc` : is a `function` that takes dataArray[i] and renders
it accordingly\
`infiniteOptions`: is a `boolean` by default `true` for infinite options support\
`buttons` : is a `boolean` by default `false` if set `true` will show previous and next buttons used for navigation\
`leftButtonText` : is the `string` text you want to view on the left button by default `previous`\
`rightButtonText` : is the `string` text you want to view on the right button by default `next`\
`rightButtonImg` : is an image URL `string` for the button by default `''` if set will render image on the right button\
`leftButtonImg` : is an image URL `string` for the button by default `''` if set will render image on the left button\
`buttonStyle` : is an `object` by default `{}` if set it controls the buttons styles
