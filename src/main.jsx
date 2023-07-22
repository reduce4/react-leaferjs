import { App, Leafer as LeaferApp } from "leafer-ui";
import { render } from "./renderer";
import { Rect } from "./components";
import { useEffect, useState } from "react";
const leafer = new LeaferApp({ view: window });

const EllipseInRect = () => {
  const speed = 10;
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });
  useEffect(() => {
    setInterval(() => {
      setPosition(({ x, y }) => ({
        x: x + speed,
        y: y + speed,
      }));
    }, 500);
  }, []);
  return (
    <>
      <Rect
        {...{
          width: 100,
          height: 100,
          x: position.x,
          y: position.y,
          fill: "yellow",
        }}
      />
    </>
  );
};

const Application = () => {
  return (
    <>
      <EllipseInRect />
    </>
  );
};
render(<Application />, leafer);
