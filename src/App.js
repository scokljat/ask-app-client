import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "./store/actions/User";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { theme } from "./globalStyles/Themes";
import { routes } from "./utils/Constants";
import Navbar from "./components/navbar/Navbar";
import jwtDecode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  const user =
    localStorage.getItem("token") && jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    if (user) dispatch(getUserById(user.sub));
  }, [dispatch, user]);

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
