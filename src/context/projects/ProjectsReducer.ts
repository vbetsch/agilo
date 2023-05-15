import {Project} from "../../types/ProjectType";
import {Action} from "../../types/ActionType";

export enum ProjectsActionType {
    SET_LOADING = 'SET_LOADING',
    ADD_PROJECT = 'ADD_PROJECT',
    SET_PROJECTS = 'SET_PROJECTS',
    SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT',
}

export interface ProjectsState {
    loading: boolean
    projects: Array<Project>
    currentProject: Project | undefined
}

export const initialProjectsState: ProjectsState = {
    loading: false,
    projects: [],
    currentProject: undefined
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
        case ProjectsActionType.SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload,
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