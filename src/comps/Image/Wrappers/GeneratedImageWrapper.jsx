import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import ConstantImage from "../comps/ConstantImage";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { StateContext } from "../../../StateContainer";

const ImageContainer = styled.div`
  margin: auto;
  position: relative;
  height: inherit;
  width: inherit;
`;
const TransformContainer = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
`;
const BackgroundImage = styled.img.attrs((props) => ({
  src: props.image,
  ref: props.ref,
  onLoad: props.onLoad,
}))`
  width: ${(props) => props.imageWidth};
  height: ${(props) => props.imageHeight};
`;
const PositionalContainer = styled.div`
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
  margin: auto;
`;
const ScaledContainer = styled.div`
  height: 2000px;
  width: 2000px;
  transform: scale(${(props) => props.sizeControl});
  transform-origin: top left;
`;

export default function GeneratedImage({ refNode, children }) {
  const imageRef = useRef(null);
  const state = useContext(StateContext);
  const [imageHeight, setImageHeight] = useState(`2000px`);
  const [imageWidth, setImageWidth] = useState(`2000px`);

  const imageOnLoad = () => {
    const imageNaturalHeight =
      (imageRef && imageRef.current && imageRef.current.naturalHeight) || 2000;
    const imageNaturalWidth =
      (imageRef && imageRef.current && imageRef.current.naturalWidth) || 2000;
    setImageHeight(
      imageNaturalHeight <= imageNaturalWidth
        ? `2000px`
        : `${(2000 / imageNaturalWidth) * imageHeight}px`
    );
    setImageWidth(
      imageNaturalHeight >= imageNaturalWidth
        ? `2000px`
        : `${(2000 / imageNaturalHeight) * imageNaturalWidth}px`
    );
  };
  return (
    <PositionalContainer sizeControl={state.sizeControl}>
      <ScaledContainer sizeControl={state.sizeControl}>
        <ImageContainer className="image-container" ref={refNode}>
          <TransformContainer>
            <TransformWrapper
              defaultScale={1}
              options={{
                disabled: state.imageLock,
                limitToWrapper: true,
              }}
              wheel={{ step: 50 / state.sizeControl }}>
              <TransformComponent>
                <BackgroundImage
                  image={state.image}
                  ref={imageRef}
                  onLoad={imageOnLoad}
                  imageWidth={imageWidth}
                  imageHeight={imageHeight}></BackgroundImage>
              </TransformComponent>
            </TransformWrapper>
          </TransformContainer>
          <ConstantImage
            tagImage={state.tagImage}
            overlayOpacity={state.overlayOpacity}></ConstantImage>
          {children}
        </ImageContainer>
      </ScaledContainer>
    </PositionalContainer>
  );
}
