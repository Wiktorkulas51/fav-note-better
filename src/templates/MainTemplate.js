import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import SideBar from "../components/ogranisms/Sidebar/Sidebar";

const MainTemplate = ({ children }) => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <SideBar />
          {children}
        </>
      </ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
