import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

export default Paragraph;
