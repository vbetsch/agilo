import {Project} from "../../types/ProjectType";
import {Action} from "../../types/ActionType";
import {UserActionType} from "../user/UserReducer";

export enum ProjectsActionType {
    SET_LOADING = 'SET_LOADING',
    ADD_PROJECT = 'ADD_PROJECT',
    SET_PROJECTS = 'SET_PROJECTS',
}

export interface ProjectsState {
    loading: boolean
    projects: Array<Project>
}

export const initialProjectsState: ProjectsState = {
    loading: false,
    projects: [],
}

export const ProjectsReducer = (state: ProjectsState, action: Action<ProjectsActionType>) => {
    switch (action.type) {
        case ProjectsActionType.SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false,
            };
        case ProjectsActionType.ADD_PROJECT:
            return {
                ...state,
                projects: [
                    action.payload,
                    ...state.projects,
                ],
            };
        case ProjectsActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}