import React from "react";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon.js";
import bulbIcon from "../../../assets/icons/bulb.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import penIcon from "../../../assets/icons/pen.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import { theme } from "../../../theme/mainTheme";

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${() => theme.primary};
`;

export default {
  component: ButtonIcon,
  title: "ButtonIcon",
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const bulbButtonIcon = () => <ButtonIcon icon={bulbIcon}></ButtonIcon>;
export const logoutButtonIcon = () => <ButtonIcon icon={logoutIcon}></ButtonIcon>;
export const penButtonIcon = () => <ButtonIcon icon={penIcon}></ButtonIcon>;
export const plusButtonIcon = () => <ButtonIcon icon={plusIcon}></ButtonIcon>;
export const twitterButtonIcon = () => <ButtonIcon icon={twitterIcon}></ButtonIcon>;
