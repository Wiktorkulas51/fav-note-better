import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";
import styled from "styled-components";
import Inpute from "../components/atoms/Inpute/Inpute";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import { theme } from "../theme/mainTheme";

const StyledTemplateWrapper = styled.div`
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
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${() => theme.bold};
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    <StyledTemplateWrapper>
      <StyledPageHeader>
        <Inpute search placeholder="Search" />
        <StyledHeading Big as="h1">
          Notes
        </StyledHeading>
        <StyledParagraph theme={theme}>6 notes</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledTemplateWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(["note", "twitter", "article"]),
};

UserPageTemplate.defaultProps = {
  pageType: "note",
};

export default UserPageTemplate;
