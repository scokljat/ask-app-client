import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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
  lightRed: "#FFE9E9",
  green: "#45bd62",
  gray: "#82807f",
  placeholderGray: "#67696d",
  tooltipBlue: "#daf4ff",
  white: "#fff",
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.8rem 3.7rem;
  gap: 1.25rem;
`;
