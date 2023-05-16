import {StatusValues} from "../../enums/StatusValues";
import {Status} from "../basics/Status";
import {findTasks} from "../../database/queries/TaskQueries";
import {Task} from "../../types/TaskType";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../context/tasks/TasksProvider";
import {TaskItem} from "./TaskItem";
import {User} from "../../types/UserType";
import {Timestamp} from "firebase/firestore";
import {Project} from "../../types/ProjectType";

export interface TasksListProperties {
    status: StatusValues
    tasks?: Array<Task>
}

export function TasksList({status, tasks}: TasksListProperties) {
    const [state, dispatch] = useContext(TaskContext);
    const statusTasks = getTasks(status)

    function getTasks(status: StatusValues) {
        if (state.tasks) {
            switch (status) {
                case StatusValues.TODO:
                    return state.tasks.todo;
                case StatusValues.IN_PROGRESS:
                    return state.tasks.progress;
                case StatusValues.DONE:
                    return state.tasks.done;
                default:
                    return undefined;
            }
        }
    }

    const loadTasks = async () => {
        if (tasks) {
            try {
                await findTasks(status, dispatch, tasks.map(task => task.id));
            } catch (e) {
                console.error(e)
            }
        }
    }

    useEffect(() => {
        loadTasks()
            .then()
            .catch((e) => console.error(e))
    }, [])

    return (
        <div className="tasklist">
            <Status status={status}/>
            <div className="tasklist-tasks">
                {statusTasks && statusTasks.map((task, index) => (
                    <TaskItem key={index} task={task}/>
                ))}
            </div>
        </div>
    )
}