import React, { PureComponent } from "react";
import styled from "styled-components";
import ConstantImage from "./ConstantImage";
// import CanvasDraw from "../utils/react-canvas-draw/lib/index";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TransformImageWrapper from "./TransformImageWrapper";

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

export default class GeneratedImage extends PureComponent {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      centerContent: false,
      setTransform: (params) => {
        return;
      },
      positionX: 0,
      positionY: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.sizeControl !== prevProps.sizeControl) {
      console.log(this.props.sizeControl);
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
              // defaultPositionX={0}
              // defaultPositionY={0}
              onZoomChange={(params) => {
                this.setState({
                  positionX: params.positionX,
                  positionY: params.positionY,
                });
              }}
              onPanning={(params) => {
                this.setState({
                  positionX: params.positionX,
                  positionY: params.positionY,
                });
              }}
              doubleClick={{ disabled: true }}
              enablePanPadding={false}
              positionX={this.state.positionX}
              positionY={this.state.positionY}
              options={{
                disabled: this.props.imageLock,
                limitToWrapper: true,
                limitToBounds: true,
                centerContent: this.state.centerContent,
              }}>
              {({ positionX, positionY, setTransform }) => (
                <TransformComponent>
                  <TransformImageWrapper
                    sizeControl={this.props.sizeControl}
                    image={image}
                    reference={this.imageRef}
                    onLoad={this.imageOnLoad}
                    setImageHeight={this.setImageHeight}
                    setImageWidth={this.setImageWidth}
                    positionX={positionX}
                    positionY={positionY}
                    setTransform={setTransform}></TransformImageWrapper>
                </TransformComponent>
              )}
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
