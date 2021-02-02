import React, { Component } from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../theme/GlobalStyle";
import PageContext from "../context/index";
import { ThemeProvider } from "styled-components";
import { withRouter } from "react-router-dom";
import { theme } from "../theme/mainTheme";

class MainTemplate extends Component {
  state = {
    pageType: "notes",
  };

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["twitters", "articles", "notes"];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    if (prevState.pageType !== currentPage) this.setState({ pageType: currentPage });
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
