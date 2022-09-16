import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import MyQuestions from "../pages/MyQuestions";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

export const routes = [
  { path: "/", page: <Login /> },
  { path: "/register", page: <Register /> },
  { path: "/dashboard", page: <Home /> },
  { path: "/questions", page: <Questions /> },
  { path: "/my-questions", page: <MyQuestions /> },
  { path: "/profile", page: <Profile /> },
  { path: "/*", page: <Error /> },
];

export const navbarList = [
  { route: "/dashboard", name: "Home" },
  { route: "/questions", name: "Questions" },
  { route: "/my-questions", name: "My questions" },
  { route: "/profile", name: "Profile" },
];
