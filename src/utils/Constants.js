import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import Questions from "../pages/questions/Questions";
import MyQuestions from "../pages/myQuestions/MyQuestions";
import Profile from "../pages/profile/Profile";
import Error from "../pages/error/Error";

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
  { route: "/dashboard?list=all-questions", name: "Home" },
  { route: "/questions", name: "Questions" },
  { route: "/my-questions", name: "My questions" },
  { route: "/profile", name: "Profile" },
];

export const homeList = [
  { route: "?list=all-questions", name: "All questions" },
  { route: "?list=trending-users", name: "Trending users" },
  { route: "?list=trending-questions", name: "Trending questions" },
];
