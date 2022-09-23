import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import jwtDecode from "jwt-decode";

import { getUserById } from "./store/actions/User";
import { routes } from "./utils/Constants";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import { theme } from "./globalStyles/Themes";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const decodedUser =
    localStorage.getItem("token") && jwtDecode(localStorage.getItem("token"));

  const { isLoggedIn, user } = useSelector((state) => state.reducerUser);

  useEffect(() => {
    if (!user.length && decodedUser) dispatch(getUserById(decodedUser?.sub));
    if (!isLoggedIn) navigate("/");
  }, [dispatch, isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-center" reverseOrder={false} />
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
