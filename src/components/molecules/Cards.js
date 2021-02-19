import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Heading from "../atoms/Heading/Heading";
import Button from "../atoms/button/Button";
import Paragraph from "../atoms/Paragraph/Paragraph";
import linkIcon from "../../assets/icons/link.png";
import { theme } from "../../theme/mainTheme";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { removeItem as removeItemAction } from "../../actions/index";
import withContext from "../../hoc/withContext";

export const StyledWrappers = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 40px -10px hsla(0, 0%, 0%, 0.1);
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
  border: 3px solid ${() => theme.twitters};
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
  top: 15px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      cardType,
      created,
      content,
      title,
      articleUrl,
      twitterName,
      removeItem,
    } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrappers onClick={this.handleClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading theme={theme}>{title}</StyledHeading>
          {cardType === "twitters" && (
            <StyledAvatar src={`src="http://twivatar.herokuapp.com/${twitterName}`} />
          )}
          {cardType === "articles" && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph theme={theme}>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrappers>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(["notes", "twitters", "articles"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: "notes",
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
