import React from "react";
import Heading from "./Heading";
import { theme } from "../../../theme/mainTheme";

export default {
  component: Heading,
  title: "Heading",
};

export const heading = () => {
  return <Heading theme={theme}>heading</Heading>;
};

export const headingBig = () => {
  return (
    <Heading Big theme={theme}>
      heading big
    </Heading>
  );
};
