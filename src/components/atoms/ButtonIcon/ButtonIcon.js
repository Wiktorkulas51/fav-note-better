import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;

  &.active {
    background-color: white;
  }

  ${({ activecolor }) => {
    return (
      activecolor &&
      css`
        background-color: ${({ activecolor }) => theme[activecolor]};
      `
    );
  }}
`;

export default ButtonIcon;
