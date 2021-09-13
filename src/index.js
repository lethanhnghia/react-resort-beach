import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyled } from "./components/GlobalStyled";
import Provider from "./components/context";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <GlobalStyled />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
