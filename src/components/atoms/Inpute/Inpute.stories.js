import React from "react";
import Inpute from "./Inpute";
import { theme } from "../../../theme/mainTheme";

export default {
  component: Inpute,
  title: "Inpute",
};

export const inpute = () => {
  return <Inpute placeholder="login" theme={theme} />;
};

export const inpSearch = () => {
  return <Inpute placeholder="search" theme={theme} search />;
};
