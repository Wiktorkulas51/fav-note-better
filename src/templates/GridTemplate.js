import React, { Component } from "react";
import PropTypes from "prop-types";
import UserPageTemplate from "./UserPageTemplate";
// import SideBar from "../components/ogranisms/Sidebar/Sidebar";
import styled from "styled-components";
import Inpute from "../components/atoms/Inpute/Inpute";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import { theme } from "../theme/mainTheme";
import withContext from "../hoc/withContext";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import plusIcon from "../assets/icons/plus.svg";
import NewItemBar from "../components/ogranisms/newItemBar/newItemBar";

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${() => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor }) => theme[activeColor]};
  background-size: 40%;
  border-radius: 50px;
  z-index: 100000;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Inpute search placeholder="Search" />
            <StyledHeading Big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph theme={theme}>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.handleNewItemBarToggle}
            icon={plusIcon}
            activecolor={pageContext}
          />
          <NewItemBar handleClose={this.handleNewItemBarToggle} isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

GridTemplate.defaultProps = {
  pageContext: "notes",
};

export default withContext(GridTemplate);
