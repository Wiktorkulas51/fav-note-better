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
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(["note", "twitter", "article"]),
};

UserPageTemplate.defaultProps = {
  pageType: "note",
};

export default UserPageTemplate;
