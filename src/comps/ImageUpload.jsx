import React from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload({
  headline,
  controlData,
  handleSwitch,
  handleChange,
  compName,
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        handleChange("image")(URL.createObjectURL(file))
      );
    },
  });
  console.log("testing");

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <p style={{ margin: "0.5em", textAlign: "center" }}>
        Drag 'n' drop/click to select images
      </p>
    </div>
  );
}
