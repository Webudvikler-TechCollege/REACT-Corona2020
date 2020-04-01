import React from "react";
import Home from "../Pages/Home/Home";
import Corona from "../Pages/Corona/Corona";


const routes = [
    {
        name: "Forside",
        path: "/",
        exact: true,
        compontent: Home
    },
    {
        name: "Filter",
        path: "/filter",
        exact: true,
        component: Corona
    }
]

export default routes;