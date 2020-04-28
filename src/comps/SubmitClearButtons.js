import { Button } from "react-bootstrap";
import React from "react";
const SubmitClearButtons = (clearState) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <Button type="submit">Generate Image</Button>
    <div style={{ width: "16px" }}></div>
    <Button variant="secondary" onClick={clearState}>
      Reset Data
    </Button>
  </div>
);
export default SubmitClearButtons;
