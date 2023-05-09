import {createBrowserRouter, Navigate} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";
import {ProfileFormPage} from "./pages/subpages/ProfileFormPage";
import EditPage from "./pages/subpages/EditPage";

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
                element: <EditPage />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    }
])