export const expLockInfo = {
  compType: "CheckToggle",
  label: "Locking Controls",
  toggleData: [
    {
      type: "switch",
      inline: true,
      stateKey: "imageLock",
      label: "Image Lock",
    },
    {
      type: "switch",
      inline: true,
      label: "Text Lock",
      stateKey: "textLock",
    },
  ],
};
export const expControlInfo = [
  {
    key: "General",
    name: "General Settings",
    controlData: [
      {
        compType: "ButtonToggle",
        stateKey: "product",
        label: "Select the Product",
        defaultValue: "GV",
        buttonData: [
          {
            label: "Volunteer",
            value: "GV",
          },
          {
            label: "Entrepreneur",
            value: "GE",
          },
          {
            label: "Talent",
            value: "GT",
          },
        ],
      },
    ],
  },

  {
    key: "Text",
    name: "Text Settings",
    controlData: [
      {
        compType: "TextInput",
        label: "Enter the Text",
        placeholder: "Enter the text here",
        stateKey: "expText",
        as: "textarea",
        desc: {
          text:
            "Use asterisk(*) syntax to create Colored Text. ex. Normal Text *Colored Text* Normal Text",
        },
      },
      {
        compType: "ButtonToggle",
        label: "Adjust the Text Alignment",
        stateKey: "textAlign",
        defaultValue: "left",
        buttonData: [
          {
            label: "Left",
            value: "left",
          },
          {
            label: "Center",
            value: "center",
          },
          {
            label: "Right",
            value: "right",
          },
        ],
      },
      {
        compType: "RangeInput",
        label: "Adjust the Font Size",
        stateKey: "fontSize",
        min: 40,
        max: 200,
      },
      {
        compType: "RangeInput",
        label: "Adjust the Line Height",
        stateKey: "lineHeight",
        min: 1,
        max: 2,
        step: "0.1",
      },
    ],
  },
  {
    key: "Image",
    name: "Image Settings",
    controlData: [
      {
        compType: "ImageUpload",
        stateKey: "image",
        label: "Upload the Image",
      },
      {
        compType: "RangeInput",
        stateKey: "overlayOpacity",
        label: "Black Overlay Opacity",
        min: 0,
        max: 1,
        step: "0.01",
      },
    ],
  },
];
export const momControlInfo = [
  {
    key: "General",
    name: "General Settings",
    controlData: [
      {
        compType: "ButtonToggle",
        stateKey: "product",
        label: "Select the Product",
        defaultValue: "GV",
        buttonData: [
          {
            label: "Volunteer",
            value: "GV",
          },
          {
            label: "Entrepreneur",
            value: "GE",
          },
          {
            label: "Talent",
            value: "GT",
          },
        ],
      },
    ],
  },

  {
    key: "Text",
    name: "Text Settings",
    controlData: [
      {
        compType: "TextInput",
        label: "Enter the Text",
        placeholder: "Enter the text here",
        stateKey: "expText",
        as: "textarea",
        desc: {
          text:
            "Use asterisk(*) syntax to create Colored Text. ex. Normal Text *Colored Text* Normal Text",
        },
      },
      {
        compType: "ButtonToggle",
        label: "Adjust the Text Alignment",
        stateKey: "textAlign",
        defaultValue: "left",
        buttonData: [
          {
            label: "Left",
            value: "left",
          },
          {
            label: "Center",
            value: "center",
          },
          {
            label: "Right",
            value: "right",
          },
        ],
      },
      {
        compType: "RangeInput",
        label: "Adjust the Font Size",
        stateKey: "fontSize",
        min: 40,
        max: 200,
      },
      {
        compType: "RangeInput",
        label: "Adjust the Line Height",
        stateKey: "lineHeight",
        min: 1,
        max: 2,
        step: "0.1",
      },
    ],
  },
  {
    key: "Image",
    name: "Image Settings",
    controlData: [
      {
        compType: "ImageUpload",
        stateKey: "image",
        label: "Upload the Image",
      },
      {
        compType: "RangeInput",
        stateKey: "overlayOpacity",
        label: "Black Overlay Opacity",
        min: 0,
        max: 1,
        step: "0.01",
      },
    ],
  },
];
export const momLockInfo = {
  compType: "CheckToggle",
  label: "Locking Controls",
  toggleData: [
    {
      type: "switch",
      inline: true,
      stateKey: "imageLock",
      label: "Image Lock",
    },
    {
      type: "switch",
      inline: true,
      label: "Text Lock",
      stateKey: "textLock",
    },
  ],
};
