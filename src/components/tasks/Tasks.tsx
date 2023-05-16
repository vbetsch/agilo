import {useContext} from "react";
import {TaskContext} from "../../context/tasks/TasksProvider";

// import {UserContext} from "../../context/user/UserProvider";

export function Tasks() {
    const [state,] = useContext(TaskContext);
    // const [user,] = useContext(UserContext);

    return (
        <div className="tasks">
            <div className="tasks-part">
                <h3 className="task-status">Todo</h3>
                {state && state.tasks.todo.map((task, index) => (
                    <p className="task-title" key={index}>{"->"} {task.title}</p>
                ))}
            </div>
            <div className="tasks-part">
                <h3 className="task-status">In progress</h3>
                {state && state.tasks.progress.map((task, index) => (
                    <p className="task-title" key={index}>{"->"} {task.title}</p>
                ))}
            </div>
        </div>
    )
}