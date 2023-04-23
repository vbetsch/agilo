import type {User} from "./UserType";
import type {Task} from "./TaskType";

export interface Project {
    id?: string,
    label: string,
    picture?: string,
    tasks?: Array<Task>
    collaborators: Array<User>,
}