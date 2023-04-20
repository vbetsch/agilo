import {createBrowserRouter, Navigate} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

/*const userLoader = async () => {
    const user = await getUser();
    if (!user) {
        return redirect("/login");
    }
    return null;
};*/

export const Router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to="/login" replace={true} />,
        // loader: userLoader
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
        path: "/dashboard",
        element: <DashboardPage />
    }
])