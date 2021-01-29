import React from "react";
import PropTypes from "prop-types";
import UserPageTemplate from "./UserPageTemplate";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";
import styled from "styled-components";
import Inpute from "../components/atoms/Inpute/Inpute";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import { theme } from "../theme/mainTheme";

const StyledWrapper = styled.div`
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

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Inpute search placeholder="Search" />
        <StyledHeading Big as="h1">
          {pageType}
        </StyledHeading>
        <StyledParagraph theme={theme}>6 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

GridTemplate.defaultProps = {
  pageType: "notes",
};

export default GridTemplate;