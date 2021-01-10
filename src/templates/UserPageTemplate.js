import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.PropTypes = {
  children: PropTypes.element.isRequired,
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
};

UserPageTemplate.defaultProps = {
  cardType: "note",
};

export default UserPageTemplate;
