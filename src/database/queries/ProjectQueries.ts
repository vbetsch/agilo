import {Project} from "../../types/ProjectType";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import React from "react";
import {Action} from "../../types/ActionType";
import {ProjectsActionType} from "../../context/projects/ProjectsReducer";

function setLoading(dispatch: React.Dispatch<Action<ProjectsActionType>>, status: boolean) {
    dispatch({
        type: ProjectsActionType.SET_LOADING,
        payload: status
    })
}

export const findProjects = async (
    projects: Array<Project> | undefined,
    dispatch: React.Dispatch<Action<ProjectsActionType>>,
) => {
    setLoading(dispatch, true);
    try {
        if (!projects) {
            throw new Error("Projects not found");
        }

        projects.map(async (project) => {
            if (!project.id) {
                throw new Error("Project not found");
            }

            const newProject = await getDoc(doc(db, 'projects', project.id));
            const data = await newProject.data();

            if (data) {
                await dispatch({
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
    } finally {
        setLoading(dispatch, false);
    }
};