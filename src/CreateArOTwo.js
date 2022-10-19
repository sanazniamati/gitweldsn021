import { useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import Konva from "konva";

export default function CreateArOTwo() {
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
      <button onClick={handelCreateShapeArs}> ArOTwo</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapeArs.map((shapeAr, i) => (
            <Line
              key={i}
              x={shapeAr.x}
              points={[
                161, 211, 317, 168, 478, 220, 459, 264, 380, 295, 323, 401, 266,
                295, 172, 264,
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
