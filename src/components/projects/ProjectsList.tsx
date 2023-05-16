import {useContext, useEffect} from "react";
import {UserContext} from "../../context/user/UserProvider";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";
import {Loading} from "../basics/Loading";
import {ProjectItem} from "./ProjectItem";
import {loadProjects} from "../../pages/subpages/Projects";

export function ProjectsList() {
    const [user,] = useContext(UserContext);
    const [projects, setProjects] = useContext(ProjectsContext);

    useEffect(() => {
        loadProjects(setProjects, user.currentUser?.my_projects)
            .then(() => console.log(projects.projects))
            .catch((e) => console.error(e));
    }, [])

    return (
        <div className="projects-list">
            {projects.loading && (
                <Loading/>
            )}
            {projects.projects.map((project, index) => (
                <ProjectItem key={index} project={project}/>
            ))}
        </div>
    )
}