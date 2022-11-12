import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../Profile";
import UserPage from "../user/UserPage";
import Login from "../LoginPage";

const publicRoutes = [
    {path: "/users", element: <UserPage/>},
    {path: "/login", element: <Login/>},
    {path: "/*", element: <Login/>}
]
export const privateRoutes = [
    {path: "profile/:userId", element: <Profile/>},
    {path: "/users", element: <UserPage/>},
    {path: "/*", element: <Profile/>},
]


const Router: FC<{isAuth: boolean}> = ({isAuth} ) => {
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => {
                    return <Route key={route.path} path={route.path} element={route.element}/>
                })
                : publicRoutes.map((route) => {
                    return <Route key={route.path} path={route.path} element={route.element}/>
                })
            }
        </Routes>
    );

};

export default Router;