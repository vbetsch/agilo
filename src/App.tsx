import {RouterProvider} from "react-router-dom";
import {Router} from "./Router";
import {UserProvider} from "./context/user/UserProvider";
import {ProjectsProvider} from "./context/projects/ProjectsProvider";

function App() {
    return <div className="app">
        <UserProvider>
            <ProjectsProvider>
                <RouterProvider router={Router}/>
            </ProjectsProvider>
        </UserProvider>
    </div>;
}

export default App;
