import {useContext} from "react";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";
import {Project} from "../../types/ProjectType";
import {useNavigate} from "react-router-dom";

export interface ProjectItemProperties {
    project: Project
}

export function ProjectItem({project}: ProjectItemProperties) {
    const [, dispatch] = useContext(ProjectsContext)
    const navigate = useNavigate()

    const openProject = async () => {
        await dispatch({
            type: ProjectsActionType.SET_LOADING,
            payload: true
        })
        try {
            await dispatch({
                type: ProjectsActionType.SET_CURRENT_PROJECT,
                payload: project
            })
            navigate("/projects/" + project.id)
        } catch(e) {
            console.error(e)
        } finally {
            await dispatch({
                type: ProjectsActionType.SET_LOADING,
                payload: false
            })
        }
    }

    return (
        <div className="project" style={{backgroundImage: `url(${project.picture})`}} onClick={openProject}>
            <p className="project-text">{project.label}</p>
        </div>
    )
}