import React, { PureComponent } from "react";
import styled from "styled-components";
import ConstantImage from "./ConstantImage";
// import CanvasDraw from "../utils/react-canvas-draw/lib/index";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageContainer = styled.div`
  margin: auto;
  position: relative;
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
`;
const TransformContainer = styled.div`
  height: ${(props) => props.sizeControl * 2000}px;
  width: ${(props) => props.sizeControl * 2000}px;
  position: absolute;
`;
const MainImage = styled.img.attrs((props) => ({
  src: props.image,
  ref: props.ref,
  onLoad: props.onLoad,
}))`
  width: ${(props) => props.setImageWidth()};
  height: ${(props) => props.setImageHeight()};
`;

export default class GeneratedImage extends PureComponent {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      centerContent: false,
      imageDisable: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.lock !== prevProps.lock) {
      if (this.props.lock === "imageLock" || this.props.lock === "allLock") {
        this.setState({ imageDisable: true });
      } else {
        this.setState({ imageDisable: false });
      }
    }
  }

  imageOnLoad = () => {
    const imageHeight =
      (this.imageRef &&
        this.imageRef.current &&
        this.imageRef.current.naturalHeight) ||
      this.props.sizeControl * 2000;
    const imageWidth =
      (this.imageRef &&
        this.imageRef.current &&
        this.imageRef.current.naturalWidth) ||
      this.props.sizeControl * 2000;
    this.setState({ imageHeight, imageWidth, centerContent: true });
  };
  setImageHeight = () =>
    this.state.imageHeight <= this.state.imageWidth
      ? `${this.props.sizeControl * 2000}px`
      : `${
          ((this.props.sizeControl * 2000) / this.state.imageWidth) *
          this.state.imageHeight
        }px`;
  setImageWidth = () =>
    this.state.imageHeight >= this.state.imageWidth
      ? `${this.props.sizeControl * 2000}px`
      : `${
          ((this.props.sizeControl * 2000) / this.state.imageHeight) *
          this.state.imageWidth
        }px`;
  render() {
    const {
      refNode,
      sizeControl,
      image,
      tagImage,
      overlayOpacity,
      children,
    } = this.props;
    return (
      <>
        <ImageContainer
          className="image-container"
          ref={refNode}
          sizeControl={sizeControl}>
          <TransformContainer sizeControl={sizeControl}>
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={0}
              defaultPositionY={0}
              options={{
                disabled: this.state.imageDisable,
                limitToWrapper: true,
                limitToBounds: true,
                centerContent: this.state.centerContent,
              }}>
              <TransformComponent>
                <MainImage
                  image={image}
                  ref={this.imageRef}
                  onLoad={this.imageOnLoad}
                  setImageHeight={this.setImageHeight}
                  setImageWidth={this.setImageWidth}></MainImage>
              </TransformComponent>
            </TransformWrapper>
          </TransformContainer>

          <ConstantImage
            sizeControl={sizeControl}
            tagImage={tagImage}
            overlayOpacity={overlayOpacity}></ConstantImage>
          {children}
        </ImageContainer>
      </>
    );
  }
}
