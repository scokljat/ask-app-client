import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { theme } from "./globalStyles/Themes";
import { routes } from "./utils/Constants";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {routes?.map((item, index) => {
          return <Route key={index} path={item.path} element={item.page} />;
        })}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
