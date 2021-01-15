import React from "react";
import PropTypes from "prop-types";
import { theme } from "../../theme/mainTheme";
import styled, { css } from "styled-components";
import Heading from "../atoms/Heading/Heading";
import Button from "../atoms/button/Button";
import Paragraph from "../atoms/Paragraph/Paragraph";
import linkIcon from "../../assets/icons/link.png";

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
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : "white")};

  :first-of-type {
    z-index: 9999;
  }

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

const StyledAvatar = styled.img`
  width: 86px;
  height: 86;
  border: 3px solid ${() => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${linkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

export const Card = ({ cardType, created, content, title, articleUrl, twitterName }) => (
  <StyledWrappers>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading theme={theme}>{title}</StyledHeading>
      <DateInfo theme={theme}>{created}</DateInfo>
      {cardType === "twitter" && (
        <StyledAvatar src={`src="http://twivatar.herokuapp.com/${twitterName}`} />
      )}
      {cardType === "article" && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph theme={theme}>{content}</Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrappers>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "note",
};
