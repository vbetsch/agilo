import React, {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {initialProjectsState, ProjectsActionType, ProjectsReducer, ProjectsState} from "./ProjectsReducer";
import {Action} from "../../types/ActionType";

export const ProjectsContext = createContext<[ProjectsState, Dispatch<Action<ProjectsActionType>>]>([
    initialProjectsState,
    () => null,
]);

export const ProjectsProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(ProjectsReducer, initialProjectsState)

    return (
        <ProjectsContext.Provider value={[state, dispatch]}>
            {children}
        </ProjectsContext.Provider>
    )
}