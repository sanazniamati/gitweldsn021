import { useState } from "react";
import { Layer, Line, Stage } from "react-konva";
import Konva from "konva";

export default function CreateArCOTwo() {
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
      <button onClick={handelCreateShapeArs}> CreateArCOTwo</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapeArs.map((shapeAr, i) => (
            <Line
              key={i}
              x={shapeAr.x}
              points={[
                177, 221, 282, 178, 425, 181, 530, 221, 510, 294, 452, 401, 353,
                434, 254, 401, 196, 294,
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
