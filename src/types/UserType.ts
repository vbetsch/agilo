import type {Project} from "./ProjectType";
import type {Task} from "./TaskType";
import type {Notification} from "./NotificationType";

export interface User {
    id?: string,
    mail: string,
    authenticationString: string,
    firstname: string,
    lastname: string,
    profile_picture?: string,
    my_projects?: Array<Project>,
    my_tasks?: Array<Task>,
    notifications?: Array<Notification>,
    preferences?: Map<string, boolean>,
}