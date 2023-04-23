import {RouterProvider} from "react-router-dom";
import {Router} from "./Router";
import {UserProvider} from "./context/UserProvider";

function App() {
    return <div className="app">
        <UserProvider>
            <RouterProvider router={Router} />
        </UserProvider>
    </div>;
}

export default App;
