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
      : (window.innerWidth / 2000) * 0.5,
};

//*Experience Control List (shortened as exp)

export const initialState = {
  expText: "Text Here",
  sizeControl: ImgInfo.sizeControl,
  height: ImgInfo.height,
  width: ImgInfo.width,
  image: cover,
  overlayOpacity: 0.4,
  accentColor: colors.GV,
  textAlign: "left",
  function: "GV",
  tagImage: tagImages.GV,
  controlledPosition: {
    x: ImgInfo.sizeControl * 500,
    y: ImgInfo.sizeControl * 500,
  },
  fontSize: 70,
  lineHeight: 1.2,
};
