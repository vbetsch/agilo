import {Task} from "../../types/TaskType";
import {formatFirebaseDate} from "../../helpers/DateHelper";

interface TaskItemProperties {
    task: Task
}

export const TaskItem = ({task}: TaskItemProperties) => (
    <div className="task">
        <p className="task-date">{formatFirebaseDate(task.creation_date)}</p>
        <p className="task-title">{task.title}</p>
        {/*task.assignees && task.assignees.map(assignee => (
            <p>{assignee.id}</p>
        ))*/}
    </div>
)