import {createBrowserRouter, Navigate} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {ErrorNotFoundPage} from "./pages/ErrorNotFoundPage";
import {ProfilePage} from "./pages/ProfilePage";
import {DashboardPage} from "./pages/DashboardPage";
import EditPasswordSubPage from "./pages/subpages/EditPasswordSubPage";
import {EditProfileSubPage} from "./pages/subpages/EditProfileSubPage";
import SignInFormSubPage from "./pages/subpages/SignInFormSubPage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {Kanban} from "./pages/subpages/Kanban";
import {Projects} from "./pages/subpages/Projects";

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
        element: <LoginPage />,
        children: [
            {
                path: "",
                element: <SignInFormSubPage />
            },
            {
                path: "password",
                element: <EditPasswordSubPage parentPage={"/login"}/>
            },
        ]
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
                element: <EditProfileSubPage />
            },
            {
                path: "edit",
                element: <EditPasswordSubPage parentPage={"/profile"}/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
        children: [
            {
                path: "",
                element: <Projects />
            },
            {
                path: ":projectId",
                element: <Kanban />
            }
        ]
    }
])