import React from "react";
import { useDropzone } from "react-dropzone";
import { Form } from "react-bootstrap";

export default function ImageUpload({ handleChange, label, stateKey }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        handleChange(stateKey)(URL.createObjectURL(file))
      );
    },
  });
  // console.log("testing");

  return (
    <Form.Group controlId={stateKey}>
      <Form.Label>{label}</Form.Label>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ cursor: "pointer" }}>
        <input {...getInputProps()} />
        <p style={{ margin: "0.5em", textAlign: "center", cursor: "pointer" }}>
          Drag 'n' drop/click to select images
        </p>
      </div>
    </Form.Group>
  );
}
