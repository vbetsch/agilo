import React, {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {initialUserState, UserActionType, UserReducer, UserState} from "./UserReducer";
import {Action} from "../types/ActionType";

export const UserContext = createContext<[UserState, Dispatch<Action<UserActionType>>]>([
    initialUserState,
    () => null,
]);

export const UserProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialUserState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}