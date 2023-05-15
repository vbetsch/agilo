import {useContext, useEffect} from "react";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";
import {Loading} from "../../components/basics/Loading";
import {ProjectItem} from "../../components/projects/ProjectItem";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";
import {findProjects} from "../../database/queries/ProjectQueries";
import {UserContext} from "../../context/user/UserProvider";

export function ProjectsList() {
    const [user,] = useContext(UserContext);
    const [projects, setProjects] = useContext(ProjectsContext);

    const loadProjects = async () => {
        setProjects({
            type: ProjectsActionType.SET_LOADING,
            payload: true
        })
        setProjects({
            type: ProjectsActionType.SET_CURRENT_PROJECT,
            payload: undefined
        })
        try {
            await findProjects(user.currentUser?.my_projects, setProjects);
        } catch (e) {
            console.error(e)
        } finally {
            setProjects({
                type: ProjectsActionType.SET_LOADING,
                payload: false
            })
        }
    }

    useEffect(() => {
        loadProjects()
            .then(() => console.log(projects.projects))
            .catch((e) => console.error(e));
    }, [])

    return (
        <div className="projects">
            {projects.loading && (
                <Loading/>
            )}
            {projects.projects.map((project, index) => (
                <ProjectItem key={index} project={project}/>
            ))}
            <div className="project" style={{placeItems: "center", justifyContent: "center", boxShadow: "none"}}>
                <img src="/svg/plus.svg" alt="+" onClick={() => console.log("TODO: Add")}/>
            </div>
        </div>
    )
}