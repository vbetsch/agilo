import {
    CollectionReference,
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
    getDocs,
    limit,
    query,
    where,
} from "firebase/firestore";
import {NavigateFunction} from "react-router-dom";
import React from "react";
import {User} from "../../types/UserType";
import {db} from "../firebase";
import {UserField} from "../../enums/UserField";
import {Action} from "../../types/ActionType";
import {UserActionType} from "../../context/user/UserReducer";

export const createUser = async (
    firstname: string,
    lastname: string,
    mail: string,
    password: string,
    dispatch: React.Dispatch<Action<UserActionType>>,
    navigate: NavigateFunction,
    redirectPath: string
) => {
    try {
        await addDoc<User>(
            collection(db, "users") as CollectionReference<User>,
            {
                firstname,
                lastname,
                mail,
                authenticationString: password,
            }
        );

        await navigate(redirectPath);
    } catch (e) {
        console.error(e);
    }
};

export const findUser = async (
    mail: string,
    password: string,
    dispatch: React.Dispatch<Action<UserActionType>>,
    navigate: NavigateFunction,
    redirectPath: string
) => {

    try {
        const find = await query(
            collection(db, "users"),
            where("mail", "==", mail),
            where("authenticationString", "==", password),
            limit(1)
        );

        const users = await getDocs(find);

        if (users.size !== 1) {
            throw new Error("Requested credentials do not match any account");
        }

        await users.forEach((doc) => {
            const user = doc;
            const data = user.data();
            if (data) {
                dispatch({
                    type: UserActionType.SET_CURRENT_USER,
                    payload: {
                        id: user.id,
                        ...data,
                    },
                });
            }
        });

        await navigate(redirectPath);
    } catch (e) {
        throw e;
    }
};

export const updateUserField = async (
    field: UserField,
    value: string,
    dispatch: React.Dispatch<Action<UserActionType>>,
    userId?: string,
) => {
    try {
        if (!userId) {
            throw new Error("User not found")
        }

        const docRef = await doc(db, 'users', userId);

        await updateDoc(docRef, {
            [field]: value
        });

        const user = await getDoc(docRef);
        const data = await user.data();

        if (data) {
            await dispatch({
                type: UserActionType.SET_CURRENT_USER,
                payload: {
                    id: user.id,
                    ...data,
                },
            });
        }

    } catch (e) {
        throw e;
    }
}

export const logout = async (dispatch: React.Dispatch<Action<UserActionType>>, navigate: NavigateFunction, redirectPath: string) => {
    try {
        await dispatch({
            type: UserActionType.SET_CURRENT_USER,
            payload: undefined,
        });

        await navigate(redirectPath);
    } catch (e) {
        throw e;
    }
}
