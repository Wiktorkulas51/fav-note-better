import React from "react";
import GlobalStyle from "../../theme/GlobalStyle";
import Button from "../../components/button/Button";

function Root() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>lul</h1>
      <Button>close / save</Button>
      <Button secondary>remove</Button>
      <Button secondary>marek</Button>
    </div>
  );
}

export default Root;
