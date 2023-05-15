import {Task} from "../../types/TaskType";
import {Action} from "../../types/ActionType";

export enum TasksActionType {
    SET_LOADING = 'SET_LOADING',
    SET_TASKS = 'SET_TASKS',
    ADD_TASK = 'ADD_TASK',
}

export interface TasksState {
    loading: boolean
    tasks: Array<Task>
}

export const initialTasksState: TasksState = {
    loading: false,
    tasks: [],
}

export const TasksReducer = (state: TasksState, action: Action<TasksActionType>) => {
    switch (action.type) {
        case TasksActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case TasksActionType.SET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false,
            };
        case TasksActionType.ADD_TASK:
            return {
                ...state,
                tasks: [
                    action.payload,
                    ...state.tasks,
                ],
            };
        default:
            return state
    }
}