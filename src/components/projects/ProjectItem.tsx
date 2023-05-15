import {useContext} from "react";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";
import {Project} from "../../types/ProjectType";
import {findProject} from "../../database/queries/ProjectQueries";

export interface ProjectItemProperties {
    project: Project
}

export function ProjectItem({project}: ProjectItemProperties) {
    const [, dispatch] = useContext(ProjectsContext)

    const openProject = async () => {
        console.log("Open " + project.label)
        const [currentProject, projectData] = await findProject(project.id)
        if (currentProject && projectData) {
            dispatch({
                type: ProjectsActionType.SET_CURRENT_PROJECT,
                payload: {
                    id: currentProject.id,
                    ...projectData
                }
            })
        }
    }

    return (
        <div className="project" style={{backgroundImage: `url(${project.picture})`}} onClick={openProject}>
            <p className="project-text">{project.label}</p>
        </div>
    )
}