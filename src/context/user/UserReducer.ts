import {Action} from "../../types/ActionType";
import {User} from "../../types/UserType";

export enum UserActionType {
    SET_LOADING = 'SET_LOADING',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface UserState {
    loading: boolean
    currentUser: User | undefined
}

export const initialUserState: UserState = {
    loading: false,
    currentUser: undefined,
}

export const UserReducer = (state: UserState, action: Action<UserActionType>) => {
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
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