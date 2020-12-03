import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    buttonColors: {
      control: {
        type: "select",
        options: {
          primary: "hsl(49, 100%, 50%)",
          secondary: "hsl(196, 83%, 75%)",
          teritary: "hsl(106, 47%, 64%)",
        },
      },
    },
  },
};

export const primary = ({ buttonColors }) => {
  // const label = "Colors";

  // const defaultValue = "hsl(49,100%, 58%)";
  // const groupId = "GROUP-ID1";

  // const value = select(label, options, defaultValue, groupId);

  return <Button color={buttonColors}>text</Button>;
};

export const secondaryButton = () => <Button secondary>text 2</Button>;
