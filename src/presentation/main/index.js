import React from "react";
import { ThemeProvider } from "styled-components";
import dark from '../style/themes/dark'
import LoginPage from "../pages/login";

const Main = () => (
  <ThemeProvider theme={dark}>
    <LoginPage />
  </ThemeProvider>
);

export default Main;
