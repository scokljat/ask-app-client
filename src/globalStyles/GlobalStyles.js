import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
   margin: 0;
   padding:0;
   background: ${({ theme }) => theme.background};
   font-family: 'Ruda', sans-serif;
  }
  `;

export const colors = {
  blue: "#0a80ec",
};
