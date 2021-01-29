import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    <>{children}</>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

UserPageTemplate.defaultProps = {
  pageType: "notes",
};

export default UserPageTemplate;
