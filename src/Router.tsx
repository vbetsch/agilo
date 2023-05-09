import {createBrowserRouter, Navigate} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";
import {ProfileFormPage} from "./pages/subpages/profile/ProfileFormPage";
import ProfileEditPage from "./pages/subpages/profile/ProfileEditPage";

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
        element: <ProfilePage />,
        children: [
            {
                path: "",
                element: <ProfileFormPage />
            },
            {
                path: "edit",
                element: <ProfileEditPage />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    }
])