import {Project} from "../../types/ProjectType";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import React from "react";
import {Action} from "../../types/ActionType";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";

export const findProject = async (
    id?: string
) => {
    if (!id) {
        throw new Error("Project not found");
    }

    try {
        const project = await getDoc(doc(db, 'projects', id));
        const data = project.data();

        return [project, data]
    } catch(e) {
        throw e;
    }
}

export const findProjects = async (
    projects: Array<Project> | undefined,
    dispatch: React.Dispatch<Action<ProjectsActionType>>,
) => {
    dispatch({
        type: ProjectsActionType.SET_PROJECTS,
        payload: [],
    });
    try {
        if (!projects) {
            return new Error("Projects not found");
        }

        projects.map(async (project) => {
            const [, data] = await findProject(project.id);

            if (data) {
                dispatch({
                    type: ProjectsActionType.ADD_PROJECT,
                    payload: {
                        id: project.id,
                        ...data,
                    },
                });
            }
        })
    } catch (e) {
        throw e;
    }
};