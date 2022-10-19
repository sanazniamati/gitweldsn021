import { useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import Konva from "konva";

export default function CreateCOTwo() {
  const [shapeArs, setShapeArs] = useState([]);

  function handelCreateShapeArs() {
    setShapeArs((prevBlobs) => [
      ...prevBlobs,
      {
        x: shapeArs.length * 150,
        color: Konva.Util.getRandomColor(),
      },
    ]);
    console.log(shapeArs);
  }

  return (
    <>
      <button onClick={handelCreateShapeArs}> COTwo</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapeArs.map((shapeAr, i) => (
            <Line
              key={i}
              x={shapeAr.x}
              points={[
                144, 222, 302, 150, 477, 221, 434, 288, 414, 385, 302, 480, 204,
                381, 180, 288,
              ]}
              tension={0.4}
              closed
              fill={shapeAr.color}
              strokeWidth={5}
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
