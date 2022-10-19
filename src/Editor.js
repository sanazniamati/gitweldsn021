import React, { Fragment, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import Konva from "konva";
import { Form } from "react-bootstrap";
import RectangelAr from "./RectangelAr";
import useImage from "use-image";
import imgback from "./img.png";

export default function Editor() {
  const [selectAr, setSelectAr] = useState(null);

  const [shapeArs, setShapeArs] = useState([]);

  function handelCreateShapeArs() {
    setShapeArs((prevBlobs) => [
      ...prevBlobs,
      {
        id: shapeArs.toString(),
        x: shapeArs.length * 150,
        color: Konva.Util.getRandomColor(),
      },
    ]);
    console.log(shapeArs);
  }

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectAr(null);
    }
  };

  const UrlImage = () => {
    const [image] = useImage(imgback);
    return <Image x={0} image={image} />;
  };
  const [show, setShow] = useState(true);
  const handelShowBackground = () => {
    setShow((show) => !show);
    console.log(show);
  };
  return (
    <Fragment>
      <button onClick={handelCreateShapeArs}>Create Shape Ar</button>
      <button onClick={handelShowBackground}>on/off</button>
      <Form.Check
        type="switch"
        label="on/off background"
        onChange={handelShowBackground}
      />
      <Form.Group>
        <Form.Label>choose image as a background</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Stage
        onClick={checkDeselect}
        onTouchStart={checkDeselect}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        {/*  Ar */}

        <Layer visible={show}>
          <UrlImage />
        </Layer>
        <Layer>
          {shapeArs.map((shapeAr, g) => (
            <RectangelAr
              key={g}
              id={shapeAr.id}
              color={shapeAr.color}
              shapeProps={shapeAr}
              isSelected={shapeAr.id === selectAr}
              onSelect={() => {
                setSelectAr(shapeAr.id);
                console.log("Selected shape" + shapeAr.id);
              }}
              onChange={(newAttrs) => {
                const copyOfSheklha = shapeArs.slice();
                copyOfSheklha[g] = newAttrs;
                // console.log(newAttrs);
                setShapeArs(copyOfSheklha);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </Fragment>
  );
}
