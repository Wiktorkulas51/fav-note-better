import React from "react";
import Paragraph from "./Paragraph";
import { theme } from "../../../theme/mainTheme";

export default {
  component: Paragraph,
  title: "Atoms/Paragraph",
};

export const paragraph = () => {
  return <Paragraph theme={theme}>Hello world</Paragraph>;
};
