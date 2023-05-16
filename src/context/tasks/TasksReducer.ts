import {Task} from "../../types/TaskType";
import {Action} from "../../types/ActionType";
import {User} from "../../types/UserType";

export enum TasksActionType {
    SET_LOADING = 'SET_LOADING',
    SET_TODO_TASKS = 'SET_TODO_TASKS',
    SET_PROGRESS_TASKS = 'SET_PROGRESS_TASKS',
    SET_DONE_TASKS = 'SET_DONE_TASKS',
    ADD_TODO_TASK = 'ADD_TODO_TASK',
    ADD_PROGRESS_TASK = 'ADD_PROGRESS_TASK',
    ADD_DONE_TASK = 'ADD_DONE_TASK',
    SET_ASSIGNEES = 'SET_ASSIGNEES',
    ADD_ASSIGNEE = 'ADD_ASSIGNEE',
}

export interface TasksState {
    loading: boolean
    tasks: { todo: Array<Task>, progress: Array<Task>, done: Array<Task> }
    assignees: Array<User>
}

export const initialTasksState: TasksState = {
    loading: false,
    tasks: {
        todo: [],
        progress: [],
        done: []
    },
    assignees: []
}

export const TasksReducer = (state: TasksState, action: Action<TasksActionType>) => {
    switch (action.type) {
        case TasksActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case TasksActionType.SET_TODO_TASKS:
            return {
                ...state,
                loading: false,
                tasks: {
                    todo: action.payload,
                    progress: [...state.tasks.progress],
                    done: [...state.tasks.done],
                },
            };
        case TasksActionType.SET_PROGRESS_TASKS:
            return {
                ...state,
                loading: false,
                tasks: {
                    todo: [...state.tasks.todo],
                    progress: action.payload,
                    done: [...state.tasks.done],
                },
            };
        case TasksActionType.SET_DONE_TASKS:
            return {
                ...state,
                loading: false,
                tasks: {
                    todo: [...state.tasks.todo],
                    progress: [...state.tasks.progress],
                    done: action.payload,
                },
            };
        case TasksActionType.ADD_TODO_TASK:
            return {
                ...state,
                tasks: {
                    todo: [
                        ...state.tasks.todo,
                        action.payload
                    ],
                    progress: [...state.tasks.progress],
                    done: [...state.tasks.done],
                },
            };
        case TasksActionType.ADD_PROGRESS_TASK:
            return {
                ...state,
                tasks: {
                    todo: [...state.tasks.todo],
                    progress: [
                        ...state.tasks.progress,
                        action.payload
                    ],
                    done: [...state.tasks.done],
                },
            };
        case TasksActionType.ADD_DONE_TASK:
            return {
                ...state,
                tasks: {
                    todo: [...state.tasks.todo],
                    progress: [...state.tasks.progress],
                    done: [
                        ...state.tasks.done,
                        action.payload
                    ],
                },
            };
        case TasksActionType.SET_ASSIGNEES:
            return {
                ...state,
                assignees: action.payload,
            };
        case TasksActionType.ADD_ASSIGNEE:
            return {
                ...state,
                assignees: [
                    ...state.assignees,
                    action.payload,
                ]
            };
        default:
            return state
    }
}