import React from "react";
import Heading from "./Heading";
import { theme } from "../../../theme/mainTheme";

export default {
  component: Heading,
  title: "Heading",
};

export const heading = () => <Heading theme={theme}>heading</Heading>;

export const headingBig = () => (
  <Heading theme={theme} Big>
    heading big
  </Heading>
);
