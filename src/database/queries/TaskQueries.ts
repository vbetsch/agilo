import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {StatusValues} from "../../enums/StatusValues";
import {Action} from "../../types/ActionType";
import {TasksActionType} from "../../context/tasks/TasksReducer";
import React from "react";
import {User} from "../../types/UserType";

function getAdderSetter(status: StatusValues) {
    switch(status) {
        case StatusValues.TODO:
            return [TasksActionType.ADD_TODO_TASK, TasksActionType.SET_TODO_TASKS];
        case StatusValues.IN_PROGRESS:
            return [TasksActionType.ADD_PROGRESS_TASK, TasksActionType.SET_PROGRESS_TASKS];
        case StatusValues.DONE:
            return [TasksActionType.ADD_DONE_TASK, TasksActionType.SET_DONE_TASKS];
        default:
            return [TasksActionType.ADD_TODO_TASK, TasksActionType.SET_TODO_TASKS];
    }
}

export const findTask = async (taskId: string) => {
    try {
        const task = await getDoc(doc(db, 'tasks', taskId));
        const data = await task.data();

        return [task, data]
    } catch(e) {
        throw e;
    }
}

export const findTasks = async (
    status: StatusValues,
    dispatch: React.Dispatch<Action<TasksActionType>>,
    tasksId?: (string | undefined)[],
) => {
    if (!tasksId) {
        throw new Error("Tasks not found");
    }

    const [adder, setter] = getAdderSetter(status)

    if (adder && setter) {
        await dispatch({
            type: setter,
            payload: []
        })

        try {
            tasksId.map(async (id) => {
                if (id) {
                    const [task, data] = await findTask(id)

                    if (task) {
                        const statusTask = await task.get("status");

                        if (data && statusTask === status) {
                            await dispatch({
                                type: adder,
                                payload: {
                                    id: id,
                                    ...data
                                }
                            })
                        }
                    }
                }
            })
        } catch (e) {
            throw e;
        }
    }
}

export const findUsers = async (
    users: Array<User> | undefined,
    dispatch: React.Dispatch<Action<TasksActionType>>
) => {
    await dispatch({
        type: TasksActionType.SET_ASSIGNEES,
        payload: []
    })

    try {
        if (!users) {
            throw new Error("Assignees not found");
        }

        users.map(async (user) => {
            // @ts-ignore
            const userFound = await getDoc(doc(db, 'users', user.id));
            const data = await userFound.data();

            if (data) {
                await dispatch({
                    type: TasksActionType.ADD_ASSIGNEE,
                    payload: {
                        id: user.id,
                        ...data,
                    }
                })
            }
        })
    } catch (e) {
        throw e;
    }
}