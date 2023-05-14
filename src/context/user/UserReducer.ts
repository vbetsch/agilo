import {Action} from "../../types/ActionType";
import {User} from "../../types/UserType";

export enum UserActionType {
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_LOADING = 'SET_LOADING'
}

export interface UserState {
    currentUser: User | undefined
    loading: boolean
}

export const initialUserState: UserState = {
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
        case UserActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
}