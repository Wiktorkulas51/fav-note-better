import styled from "styled-components";

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 40px;
  background-repeat: no-repeat;
  border: none;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
