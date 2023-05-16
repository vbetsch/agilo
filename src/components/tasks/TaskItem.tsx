import {Task} from "../../types/TaskType";
import {formatFirebaseDate} from "../../helpers/DateHelper";
import {useContext, useEffect} from "react";
import {TaskContext} from "../../context/tasks/TasksProvider";
import {User} from "../../types/UserType";
import {findUsers} from "../../database/queries/TaskQueries";

interface TaskItemProperties {
    task: Task
}

export function TaskItem({task}: TaskItemProperties) {
    const [state, dispatch] = useContext(TaskContext)
    let assigneesNames = state.assignees ? state.assignees[0]?.firstname : ""
    const tasksId = state.assignees.map((user) => user.my_tasks?.map((task) => task.id))

    state.assignees && tasksId && state.assignees.map(assignee => {
        // assignee.my_tasks && assignee.my_tasks?.map((task) => console.log(task.id))
        assigneesNames += `, ${assignee.firstname}`
    })

    const loadAssignees = async (assignees?: Array<User>) => {
        try {
            await findUsers(assignees, dispatch);
            // console.log(state.assignees)
        } catch (e) {
            // console.error(e)
        }
    }

    useEffect(() => {
        loadAssignees(task.assignees)
            .then()
            .catch((e) => console.error(e))
    }, [])

    return (
        <div className="task">
            <p className="task-date">{formatFirebaseDate(task.creation_date)}</p>
            <p className="task-title">{task.title}</p>
            {/*<p>{assigneesNames}</p>*/}
        </div>
    )
}