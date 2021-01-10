import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
  argTypes: {
    buttonColors: {
      control: {
        type: "select",
        options: {
          note: "hsl(49, 100%, 50%)",
          twitter: "hsl(196, 83%, 75%)",
          article: "hsl(106, 47%, 64%)",
        },
      },
    },
  },
};

export const primary = ({ buttonColors }) => {
  console.log(buttonColors);
  return <Button color={buttonColors}>text</Button>;
};

export const secondaryButton = () => <Button secondary>text 2</Button>;
