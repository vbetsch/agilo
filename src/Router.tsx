import {createBrowserRouter, Navigate} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";

export const Router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorNotFoundPage />,
    },
    {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    }
])