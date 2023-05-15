import React, {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {initialTasksState, TasksActionType, TasksReducer, TasksState} from "./TasksReducer";
import {Action} from "../../types/ActionType";

export const TaskContext = createContext<[TasksState, Dispatch<Action<TasksActionType>>]>([
    initialTasksState,
    () => null
]);

export const TasksProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(TasksReducer, initialTasksState)

    return (
        <TaskContext.Provider value={[state, dispatch]}>
            {children}
        </TaskContext.Provider>
    )
}