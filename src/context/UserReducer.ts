import {User} from "../types/UserType";
import {Action} from "../types/ActionType";

export enum UserActionType {
    ADD_USERS = 'ADD_USERS',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_LOADING = 'SET_LOADING'
}

export interface UserState {
    users: User[],
    currentUser: User | undefined
    loading: boolean
}

export const initialUserState: UserState = {
    users: [],
    currentUser: undefined,
    loading: true
}

export const UserReducer = (state: UserState, action: Action<UserActionType>) => {
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionType.SET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case UserActionType.ADD_USERS:
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.users,
                ],
            };
        case UserActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}