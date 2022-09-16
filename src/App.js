import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { theme } from "./globalStyles/Themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
