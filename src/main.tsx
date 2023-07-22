import ReactDom from "react-dom";
import LeaferDom from "./LeaferRender";
import { Leafer, Rect } from "leafer-ui";
import { Text } from "./ReactLeafer";

const App = () => {
  //   return <daiv>hello</daiv>;
  return (
    <>
      <Text>hello</Text>
    </>
  );
};

const leafer = new Leafer({ view: window });
LeaferDom.render(<App />, leafer);
// // ReactDom.render(<App />, document.querySelector("#root"));

//test
// import { Leafer, Rect } from "leafer-ui";

// const leafer = new Leafer({ view: window });
// const rect = new Rect({
//   width: 100,
//   height: 100,
//   x: 100,
//   y: 100,
//   fill: "red",
// });
// leafer.add(rect);

// // console.log(leafer.getBounds("render"));
// setTimeout(() => {
//   //   leafer.canvas.clearRect(0, 0, leafer.canvas.width, leafer.canvas.height);
//   // leafer.canvas.clear();
// });
