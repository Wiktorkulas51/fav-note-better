import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 40px;
  background-repeat: no-repeat;
  border: none;
  background-color: ${({ active }) => (active ? "whtie" : "transparent")};
`;

export default ButtonIcon;
