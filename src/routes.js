import { lazy } from "react";
import { v4 as uuid } from "uuid";

// const AuthPage = lazy(() => {
//   return import("./pages/AuthPage/AuthPage");
// });

const LoginPage = lazy(() => {
  return import("./pages/LoginPage/LoginPage");
});

const RegisterPage = lazy(() => {
  return import("./pages/RegisterPage/RegisterPage");
});

const HomePage = lazy(() => {
  return import("./pages/Home/HomePage");
});

// {
//   exact: true,
//   path: "/",
//   component: AuthPage,
//   key: uuid(),
//   private: false,
//   restricted: false,
// },
const routes = [
  {
    exact: true,
    path: "/login",
    component: LoginPage,
    key: uuid(),
    private: false,
    restricted: false,
  },
  {
    exact: true,
    path: "/register",
    component: RegisterPage,
    key: uuid(),
    private: false,
    restricted: true,
  },
  {
    exact: true,
    path: "/home",
    component: HomePage,
    key: uuid(),
    private: true,
    restricted: false,
  },
];

export default routes;
