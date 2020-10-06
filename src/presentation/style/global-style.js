import { createGlobalStyle } from "styled-components/native";

export default createGlobalStyle`
  @font-face {
    font-family: 'Space Mono';
    src: url('../../../assets/fonts/Space_Mono/SpaceMono-Regular.ttf');
  };
  * {
    font-family: Space Mono;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
