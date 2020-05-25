import React, { useEffect } from "react";
import styled from "styled-components";
import { TransformComponent } from "react-zoom-pan-pinch";
import usePrevious from "../utils/usePrevious";
const MainImage = styled.img.attrs((props) => ({
  src: props.image,
  ref: props.ref,
  onLoad: props.onLoad,
}))`
  width: ${(props) => props.setImageWidth()};
  height: ${(props) => props.setImageHeight()};
`;
export default function TransformImageWrapper({
  image,
  reference,
  onLoad,
  setImageHeight,
  setImageWidth,
  positionX,
  positionY,
  scale,
  setTransform,
  sizeControl,
}) {
  const previousSizeControl = usePrevious(sizeControl);
  useEffect(() => {
    console.log(previousSizeControl);

    if (previousSizeControl !== 1) {
      if (sizeControl === 1) {
        setTransform(
          positionX / previousSizeControl,
          positionY / previousSizeControl,
          scale,
          0,
          "linear"
        );
      }
    } else {
      setTransform(
        positionX * sizeControl,
        positionY * sizeControl,
        scale,
        0,
        "linear"
      );
    }
  }, [sizeControl]);

  return (
    <>
      <MainImage
        image={image}
        ref={reference}
        onLoad={onLoad}
        setImageHeight={setImageHeight}
        setImageWidth={setImageWidth}></MainImage>
    </>
  );
}
