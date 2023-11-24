import React, {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from "react";
import {Project} from "../../types/ProjectType";

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

export const ProjectsContext = createContext<[ProjectsState, Dispatch<SetStateAction<ProjectsState>>]>([
    initialProjectsState,
    () => null,
]);

export const NewProjectsProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useState(initialProjectsState)

    return (
        <ProjectsContext.Provider value={[state, dispatch]}>
            {children}
        </ProjectsContext.Provider>
    )
}