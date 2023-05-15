import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";
import {ProjectsList} from "../components/projects/ProjectsList";
import {ProjectsContext} from "../context/projects/ProjectsProvider";
import {useContext, useEffect} from "react";
import {ProjectsActionType} from "../context/projects/ProjectsReducer";
import {findProjects} from "../database/queries/ProjectQueries";
import {UserContext} from "../context/user/UserProvider";

export function ProjectsPage() {
    const [user,] = useContext(UserContext);
    const [projects, setProjects] = useContext(ProjectsContext);

    const loadProjects = async () => {
        setProjects({
            type: ProjectsActionType.SET_LOADING,
            payload: true
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
        <BasicPage>
            <Title image={"/svg/project.svg"} text={"Projects"}/>
            <ProjectsList projects={projects.projects} loading={projects.loading}/>
        </BasicPage>
    )
}