import React, {useContext, useEffect} from "react";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";
import {Loading} from "../../components/basics/Loading";
import {ProjectItem} from "../../components/projects/ProjectItem";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";
import {findProjects} from "../../database/queries/ProjectQueries";
import {UserContext} from "../../context/user/UserProvider";
import {Action} from "../../types/ActionType";
import {Project} from "../../types/ProjectType";

export const loadProjects = async (dispatch: React.Dispatch<Action<ProjectsActionType>>, projects: Array<Project> | undefined) => {
    dispatch({
        type: ProjectsActionType.SET_LOADING,
        payload: true
    })
    dispatch({
        type: ProjectsActionType.SET_CURRENT_PROJECT,
        payload: undefined
    })
    try {
        await findProjects(projects, dispatch);
    } catch (e) {
        console.error(e)
    } finally {
        dispatch({
            type: ProjectsActionType.SET_LOADING,
            payload: false
        })
    }
}

export function Projects() {
    const [user,] = useContext(UserContext);
    const [projects, setProjects] = useContext(ProjectsContext);


    useEffect(() => {
        loadProjects(setProjects, user.currentUser?.my_projects)
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