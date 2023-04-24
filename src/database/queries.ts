import {
    CollectionReference,
    DocumentData,
    addDoc,
    collection,
    getDoc,
    getDocs,
    limit,
    query,
    where,
} from "firebase/firestore";
import { db } from "./firebase";
import { User } from "../types/UserType";
import { UserActionType } from "../context/UserReducer";
import { Action } from "../types/ActionType";
import { NavigateFunction } from "react-router-dom";

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
        const docRef = await addDoc<User>(
            collection(db, "users") as CollectionReference<User>,
            {
                firstname,
                lastname,
                mail,
                authenticationString: password,
            }
        );

        const doc = await getDoc(docRef);
        const data = doc.data();

        if (data) {
            dispatch({
                type: UserActionType.ADD_USERS,
                payload: {
                    id: doc.id,
                    ...data,
                },
            });
        }

        navigate(redirectPath);
    } catch (e) {
        console.error(e);
    }
};

export const findUser = async (
    mail: string,
    password: string,
    navigate: NavigateFunction,
    redirectPath: string
) => {
    
    try {
        const docRef = query(
            collection(db, "users"),
            where("mail", "==", mail),
            where("authenticationString", "==", password),
            limit(1)
        );
        const users = await getDocs(docRef);

        if (users.size === 1) {
            let data: DocumentData;

            users.forEach((doc) => {
                data = doc.data();
                console.log(data);
            });

            navigate(redirectPath);
        } else {
            throw new Error("Requested credentials do not match any account");
        }
    } catch (e) {
        console.error(e);
    }
};
