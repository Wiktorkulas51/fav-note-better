import React from "react";
import styled, { css } from "styled-components";
import Heading from "../atoms/Heading/Heading";
import Button from "../atoms/button/Button";
import Paragraph from "../atoms/Paragraph/Paragraph";
import { theme } from "../../theme/mainTheme";

export const StyledWrappers = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ yellow }) => (yellow ? theme.primary : "white")};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0;
  font-weight: ${() => theme.bold};
  font-size: ${() => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

export const Cards = () => (
  <StyledWrappers>
    <InnerWrapper yellow>
      <StyledHeading theme={theme}>Hello</StyledHeading>
      <DateInfo theme={theme}>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph theme={theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sit non in hic, recusandae
        laborum ducimus! Veritatis deserunt, sint, eos dignissimos, pariatur error officiis iure qui
        quis facilis sequi laudantium?
      </Paragraph>
      <Button secondery>REMOVE</Button>
    </InnerWrapper>
  </StyledWrappers>
);
