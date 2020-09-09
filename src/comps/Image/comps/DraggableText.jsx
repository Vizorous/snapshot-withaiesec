import React, { useContext, useRef } from "react";
import { StateContext, FunctionContext } from "../../../StateContainer";
import styled from "styled-components";
import Draggable from "react-draggable";
import TextGenerator from "./TextGenerator";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

const DraggableContainer = styled.div`
  pointer-events: none;
  position: absolute;
  height: inherit;
  width: inherit;
`;

export default function DraggableText({ reference }) {
  const state = useContext(StateContext);
  const { handleDrag } = useContext(FunctionContext);
  const onImageRef = useRef(null);
  const sanitizeConf = useRef({
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] },
  });

  // !Experimental Code of ContentEditable
  const editableText = useRef("dsfsf");
  const sanitize = () => {
    editableText.current = sanitizeHtml(
      editableText.current,
      sanitizeConf.current
    );
  };
  const handleChange = (evt) => {
    editableText.current = evt.currentTarget.value;
  };

  return (
    <DraggableContainer className="draggable-container">
      <Draggable
        bounds="parent"
        onStart={!state.textLock ? () => true : () => false}
        onDrag={handleDrag}
        scale={state.sizeControl}
        position={state.controlledPosition}>
        <div style={{ display: "inline-block", maxWidth: "fit-content" }}>
          {state.editTextOnImageMode ? (
            <ContentEditable
              style={{ fontSize: state.fontSize, pointerEvents: "all" }}
              html={editableText.current}
              onChange={handleChange}
              onBlur={sanitize}></ContentEditable>
          ) : (
            <TextGenerator
              enableDrag={!state.textLock}
              text={state.text}
              fontSize={state.fontSize}
              lineHeight={state.lineHeight}
              accentColor={state.accentColor}
              textAlign={state.textAlign}
              reference={reference}></TextGenerator>
          )}
        </div>
      </Draggable>
    </DraggableContainer>
  );
}
