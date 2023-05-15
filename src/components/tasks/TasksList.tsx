import {StatusValues} from "../../enums/StatusValues";
import {Status} from "../basics/Status";
import {findTasks} from "../../database/queries/TaskQueries";
import {Task} from "../../types/TaskType";
import {useContext} from "react";
import {TaskContext} from "../../context/tasks/TasksProvider";

export interface TasksListProperties {
    status: StatusValues
    tasks?: Array<Task>
}

export function TasksList({status, tasks}: TasksListProperties) {
    const [state, dispatch] = useContext(TaskContext);

    const loadTasks = async () => {
        if (tasks) {
            try {
                await findTasks(status, dispatch, tasks.map(task => task.id));
            } catch (e) {
                console.error(e)
            }
        }
    }

    return (
        <div className="tasklist">
            <Status status={status}/>
            <button onClick={loadTasks}>Load</button>
            {state.tasks && state.tasks.map((task, index) => (
                <p key={index}>{task.title}</p>
            ))}
        </div>
    )
}