import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {StatusValues} from "../../enums/StatusValues";
import {Action} from "../../types/ActionType";
import {TasksActionType} from "../../context/tasks/TasksReducer";
import React from "react";

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

    await dispatch({
        type: TasksActionType.SET_TASKS,
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
                            type: TasksActionType.ADD_TASK,
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