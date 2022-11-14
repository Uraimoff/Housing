import useId from "../hooks/useId";
import Contacts from "../pages/Contacts";
import SingIn from "../pages/SignIn";
import Home from "./../pages/Home";
import Properties from "./../pages/Properties";
import home from "./../assets/icons/svg/home.svg"
import apartment from "./../assets/icons/svg/apartment.svg"
import office from "./../assets/icons/svg/office.svg"
import villa from "./../assets/icons/svg/villa.svg"
import category from "./../assets/img/category.png"

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

export const categorydata = [
  {
    img: category,
    icon: home,
    name: "House"
  },
  {
    img: category,
    icon: apartment,
    name: "Apartment"
  },
  {
    img: category,
    icon: office,
    name: "Office"
  },
  {
    img: category,
    icon: villa,
    name: "Villa"
  },
  {
    img: category,
    icon: home,
    name: "House"
  },
  {
    img: category,
    icon: home,
    name: "House"
  },
];
