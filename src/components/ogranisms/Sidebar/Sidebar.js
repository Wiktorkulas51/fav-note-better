import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import bulbIcon from "../../../assets/icons/bulb.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import penIcon from "../../../assets/icons/pen.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import { theme } from "../../../theme/mainTheme";
import withContext from "../../../hoc/withContext";
import { routes } from "../../../routes/index";

const StyledSideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoIcon = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinksList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

const StyledLougtButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const SideBar = ({ pageContext }) => (
  <StyledSideBar activeColor={pageContext}>
    <StyledLogoIcon to="/notes" />
    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLougtButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledSideBar>
);

SideBar.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

export default withContext(SideBar);
