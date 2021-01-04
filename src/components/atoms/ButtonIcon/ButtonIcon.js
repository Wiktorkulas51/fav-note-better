import styled from "styled-components";

export const ButtonIcon = styled.button`
  width: 67px;
  height: 67;
  border-radius: 20px;
  background-image: url(${(icon) => icon});
  background-position: 50% 50%;
  background-size: 40px;
  border: none;
`;
