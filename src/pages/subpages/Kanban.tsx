import {useParams} from "react-router-dom";
import {findProject} from "../../database/queries/ProjectQueries";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";
import {useContext, useEffect} from "react";
import {ProjectsContext} from "../../context/projects/ProjectsProvider";

export function Kanban() {
    const [projects, dispatch] = useContext(ProjectsContext);
    const { projectId } = useParams();

    const loadProject = async () => {
        dispatch({
            type: ProjectsActionType.SET_LOADING,
            payload: true
        })
        if (projectId) {
            try {
                const [projectFound, data] = await findProject(projectId);
                if (projectFound && data) {
                    dispatch({
                        type: ProjectsActionType.SET_CURRENT_PROJECT,
                        payload: projects.projects.filter((p) => p.id === projectFound.id)[0]
                    })
                }
            } catch (e) {
                console.error(e)
            } finally {
                dispatch({
                    type: ProjectsActionType.SET_LOADING,
                    payload: true
                })
            }
        } else {
            console.error("Project ID not found")
        }
    }

    useEffect(() => {
        loadProject()
            .then(r => console.log(r))
            .catch(e => console.error(e))
    }, [])

    return (
        <div className="kanban">
            <p>Kanban</p>
            {projects.currentProject && <p>{projects.currentProject.picture}</p>}
        </div>
    )
}