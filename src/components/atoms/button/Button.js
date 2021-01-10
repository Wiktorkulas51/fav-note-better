import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  background-color: ${({ color }) => (color ? color : theme.note)};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) => {
    return (
      secondary &&
      css`
        background-color: hsl(0, 0%, 90%);
        width: 105px;
        height: 30px;
        font-size: 10px;
      `
    );
  }}
`;

export default Button;
