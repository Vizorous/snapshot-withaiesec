import { v4 } from "uuid";

import TextInputControl from "./comps/TextInputControl";
import TextAlignmentControl from "./comps/TextAlignmentControl";
import FunctionControl from "./comps/FunctionControl";
import RangeControl from "./comps/RangeControl";
import ImageUpload from "./comps/ImageUpload";
export const expControlList = {
  TextInputControl: TextInputControl,
  TextAlignmentControl: TextAlignmentControl,
  FunctionControl: FunctionControl,
  ImageUpload: ImageUpload,
  RangeControl: RangeControl,
};

export const expControlInfo = [
  {
    compName: "FunctionControl",
    headline: "Select your Function",
    controlData: [
      {
        id: "function",
        label: "Volunteer",
        value: "GV",
        buttonKey: v4(),
      },
      {
        id: "function",
        label: "Entrepreneur",
        value: "GE",
        buttonKey: v4(),
      },
      {
        id: "function",
        label: "Talent",
        value: "GT",
        buttonKey: v4(),
      },
    ],
  },
  {
    compName: "TextInputControl",
    headline: "Text Inputs",
    controlData: [
      {
        label: "Text",
        placeholder: "Enter the text",
        id: "expText",
        as: "textarea",
        desc: {
          text:
            "Use *Text* syntax to create Colored Text. ex. Normal Text *Colored Text* Normal Text",
          key: v4(),
        },
        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
    ],
  },
  {
    compName: "TextAlignmentControl",
    headline: "Text Align",
    controlData: [
      {
        id: "textAlign",
        label: "Left",
        value: "left",
        buttonKey: v4(),
      },
      {
        id: "textAlign",
        label: "Center",
        value: "center",
        buttonKey: v4(),
      },
      {
        id: "textAlign",
        label: "Right",
        value: "right",
        buttonKey: v4(),
      },
    ],
  },
  {
    compName: "ImageUpload",
    headline: "Upload the Image",
    controlData: null,
  },
  {
    compName: "RangeControl",
    headline: "Range Controls",
    controlData: [
      {
        label: "Adjust the font size",
        id: "fontSize",
        min: 40,
        max: 200,

        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
      {
        label: "Adjust the line height",
        id: "lineHeight",
        min: 1,
        max: 2,
        step: "0.1",
        groupKey: v4(),
        labelKey: v4(),
        controlKey: v4(),
      },
    ],
  },
];

export const momentControlList = {};

export const momentControlInfo = [];
