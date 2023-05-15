import {RouterProvider} from "react-router-dom";
import {Router} from "./Router";
import {UserProvider} from "./context/user/UserProvider";
import {ProjectsProvider} from "./context/projects/ProjectsProvider";
import {TasksProvider} from "./context/tasks/TasksProvider";

function App() {
    return <div className="app">
        <UserProvider>
            <ProjectsProvider>
                <TasksProvider>
                    <RouterProvider router={Router}/>
                </TasksProvider>
            </ProjectsProvider>
        </UserProvider>
    </div>;
}

export default App;
