import {Action} from "../enums/Action";
import type {Project} from "./ProjectType";
import type {Task} from "./TaskType";
import type {User} from "./UserType";

export interface Notification {
    id?: string,
    type: Action,
    project: Project,
    task: Task,
    concerned_user?: User,
    notified_users?: Array<User>
}