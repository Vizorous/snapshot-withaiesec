import GVwm from "../assets/GVwm.png";
import GTwm from "../assets/GTwm.png";
import GEwm from "../assets/GEwm.png";
import cover from "../assets/noimg.jpg";

export const tagImages = {
  GV: GVwm,
  GE: GEwm,
  GT: GTwm,
};
export const colors = {
  GV: "#F85A40",
  GE: "#30C39E",
  GT: "#0A8EA0",
};
export const ImgInfo = {
  width: 2000,
  height: 2000,
  sizeControl:
    window.innerWidth < 800
      ? (window.innerWidth / 2000) * 0.9
      : (window.innerWidth / 2000) * 0.5 < window.innerHeight / 2000
      ? (window.innerHeight / 2000) * 0.8
      : (window.innerWidth / 2000) * 0.5,
};

//*Experience Control List (shortened as exp)

export const initialState = {
  clearState: false,
  textLock: false,
  imageLock: false,
  text: "Text Here",
  sizeControl: ImgInfo.sizeControl,
  height: ImgInfo.height,
  width: ImgInfo.width,
  image: cover,
  overlayOpacity: 0.4,
  accentColor: colors.GV,
  textAlign: "left",
  product: "GV",
  tagImage: tagImages.GV,
  addedTop: 0,
  addedLeft: 0,
  addedRight: 0,
  addedBottom: 0,
  whiteBoxControlMode: "none",
  render: false,
  whiteBoxZoom: false,
  whiteBoxEraser: false,
  controlledPosition: {
    x: 500,
    y: 500,
  },
  fontSize: 70,
  lineHeight: 1.2,
  whiteBox: {
    top: 500,
    left: 500,
    bottom: 300,
    right: 300,
    rounded: 30,
    lineWidth: 5,
  },
};
