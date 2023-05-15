import {StatusValues} from "../../enums/StatusValues";
import {Status} from "../basics/Status";

export interface TasksListProperties {
    status: StatusValues
}

export function TasksList({status}: TasksListProperties) {
    return (
        <div className="tasklist">
            <Status status={status}/>
        </div>
    )
}