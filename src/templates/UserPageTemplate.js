import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children }) => (
  <>
    <SideBar />
    <>{children}</>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

UserPageTemplate.defaultProps = {
  pageContext: "notes",
};

export default UserPageTemplate;
