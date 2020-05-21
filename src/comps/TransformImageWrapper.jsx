import React, { useEffect } from "react";
import styled from "styled-components";
import { TransformComponent } from "react-zoom-pan-pinch";
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
  setTransform,
  sizeControl,
}) {
  useEffect(() => {
    console.log(sizeControl);
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
