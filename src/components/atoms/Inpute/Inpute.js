import styled, { css } from "styled-components";
import magifireIcon from "../../../assets/magnifire.svg";
console.log(magifireIcon);

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => {
    return theme.grey100;
  }};
  border: none;
  border-radius: 50px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) => {
    search &&
      css`
        padding: 10px 20px 10px 40px;
        font-size: ${({ theme }) => theme.fontSize.xs};
        background-image: url(${magifireIcon});
        background-size: 20px;
        background-position: 150px 50%;
        background-repeat: no-repeat;
      `;
  }}
`;

export default Input;
