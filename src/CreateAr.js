import { useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import Konva from "konva";

export default function CreateAr() {
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
      <button onClick={handelCreateShapeArs}> Ar</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapeArs.map((shapeAr, i) => (
            <Line
              key={i}
              x={shapeAr.x}
              points={[
                124, 139, 176, 114, 272, 112, 334, 139, 306, 156, 278, 166, 257,
                181, 254, 222, 230, 252, 206, 202, 204, 172,
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
