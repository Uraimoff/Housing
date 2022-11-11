import useId from "../hooks/useId";
import Contacts from "../pages/Contacts";
import SingIn from "../pages/SignIn";
import Home from "./../pages/Home";
import Properties from "./../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: <Home />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Contacts />,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <SingIn />,
    title: "Sing in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>SignUp</h1>,
    title: "Sing up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
