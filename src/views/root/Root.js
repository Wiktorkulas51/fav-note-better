import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Button from "../../components/atoms/button/Button";
import { theme } from "../../theme/mainTheme";

function Root() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>lul</h1>
          <Button>close / save</Button>
          <Button secondary>remove</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
