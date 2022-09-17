import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
   margin: 0;
   padding:0;
   background: ${({ theme }) => theme.background};
   font-family: 'Ruda', sans-serif;
   overflow:hidden;
   height:100vh;
  }
  `;

export const colors = {
  blue: "#0a80ec",
  red: "#f3425f",
  gray: "#82807f",
  placeholderGray: "#67696d",
};
