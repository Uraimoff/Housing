import useId from "../hooks/useId";
import Home from "./../pages/Home"
import Properties from "./../pages/Properties"

export const navbar=[
    {id: useId, element: <Home/>, title: "Home", path: "/home", private: false, hidden: false},
    {id: useId, element: <Properties/>, title: "Properties", path: "/properties", private: false, hidden: false}
]