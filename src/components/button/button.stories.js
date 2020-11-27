import React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
};

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("primary", () => {
    const label = "Colors";
    const options = {
      primary: "hsl(49, 100%, 50%)",
      secondary: "hsl(196, 83%, 75%)",
      teritary: "hsl(106, 47% ,64%)",
    };
    const defaultValue = "hsl(49,100%, 58%)";
    const groupId = "GROUP-ID1";

    const value = select(label, options, defaultValue, groupId);

    return <Button color={value}>text</Button>;
  })
  .add("secondary", () => <Button secondary>text 2</Button>);
