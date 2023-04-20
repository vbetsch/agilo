import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

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
        element: <LoginPage />,
        // loader: userLoader
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/dashboard",
        element: <DashboardPage />
    }
])