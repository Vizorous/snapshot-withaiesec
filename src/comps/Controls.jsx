import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import SubmitClearButtons from "./SubmitClearButtons";
import { ControlContext } from "../App";
function Controls({ controlInfo, refNode, ControlList }) {
  const { clearState, handleChange, handleSwitch, handleGenerate } = useContext(
    ControlContext
  );

  return (
    <Form className="controls" onSubmit={handleGenerate(refNode)}>
      {controlInfo &&
        //This Can Dynamically Render The Control Components, DO NOT TOUCH THIS
        controlInfo.map((item, index) => (
          <React.Fragment key={`${index}-fragment`}>
            {React.createElement(ControlList[item.compName], {
              key: item.compName,
              compName: item.compName,
              headline: item.headline,
              controlData: item.controlData,
              handleChange: handleChange,
              handleSwitch: handleSwitch,
            })}
            <hr key={`${index}-hr`}></hr>
          </React.Fragment>
        ))}
      {SubmitClearButtons(clearState)}
      <hr></hr>
    </Form>
  );
}
export default Controls;
// {toggleControl && (
//           <Form.Group controlId={"controls__toggle"}>
//             {TextInputControl &&
//               TextInputControl.map((val) => {
//                 return (
//                   <Form.Check
//                     inline
//                     type="checkbox"
//                     label={val.label}
//                     value={val.value}></Form.Check>
//                 );
//               })}
//           </Form.Group>
//         )}
//         {selectControl && <div className="controls__select">test</div>}
//         {radioControl && <div className="controls__radio">test</div>}
//         {rangeControl && <div className="controls__slider"></div>}
//         <div></div>
//         <div className="controls__submit-btn"></div>
// handleGenerate = () => {
//   this.setState({ sizeControl: 1 }, () => {
//     // setTimeout(() => {
//     let imageNode = this.imageNodeRef;
//     // console.log(imageNode.current.offsetTop);
//     dti.toJpeg(imageNode.current, { quality: 0.8 }).then((blob) => {
//       window.saveAs(
//         blob,
//         `${this.state.OGETSwitch}-${this.state.country}-${this.state.oppName}.jpg`
//       );
//       // setTimeout(() => {
//       this.setState({
//         sizeControl:
//           window.innerWidth <= 600 ? (window.innerWidth / 2000) * 0.9 : 0.25,
//       });
//     });
//     // }, 200);
//     // }, 400);
//   });
//   // eslint-disable-next-line no-lone-blocks
//   {
//     // setTimeout(() => {
//     // 	let imageNode = this.imageNodeRef;
//     // 	console.log(imageNode.current.offsetTop);
//     // 	// this.imageNodeRef.offsetLeft = 0;
//     // 	// this.imageNodeRef.offsetTop = 0;
//     // 	// imageNode.current.offsetTop = 0;
//     // 	// imageNode.current.offsetLeft = 0;
//     // 	// console.log(this.imageNodeRef);
//     // 	setTimeout(() => {
//     // 		dti.toJpeg(imageNode.current, { quality: 0.8 }).then(blob => {
//     // 			window.saveAs(blob, "image-node.png");
//     // 			// this.setState({ sizeControl: 0.25 });
//     // 		});
//     // 	}, 400);
//     // }, 400);
//   }
// };
