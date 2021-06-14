## Description

Responsive react carousel component that takes any HTML content and renders them accordingly.

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
app.js
```
import React from "react";
import Carousel from "./carousel";
const data = [
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
const App = () => {
  return (
    <div style={{ width: "100vw", height: 500 }}>
      <Carousel arrayLength={data.length} infiniteOptions={false}>
        <Carousel.Item>
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
              src={data[0].img}
              style={{ objectFit: "contain", height: "90%" }}
            />
            <p>{data[0].text}</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
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
              src={data[1].img}
              style={{ objectFit: "contain", height: "90%" }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
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
              src={data[2].img}
              style={{ objectFit: "contain", height: "90%" }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <p>{data[3].text}</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default App;
```
### Carousel slide
 each slide should be wrapped in a `<Carousel.Item> {...slide content } </Carousel.Item>`
### Props
`arrayLength` : is data array lenth\
`infiniteOptions`: is a `boolean` by default `true` for infinite options support\
`buttons` : is a `boolean` by default `false` if set `true` will show previous and next buttons used for navigation\
`leftButtonText` : is the `string` text you want to view on the left button by default `previous`\
`rightButtonText` : is the `string` text you want to view on the right button by default `next`\
`rightButtonImg` : is an image URL `string` for the button by default `''` if set will render image on the right button\
`leftButtonImg` : is an image URL `string` for the button by default `''` if set will render image on the left button\
`buttonStyle` : is an `object` by default `{}` if set it controls the buttons styles
