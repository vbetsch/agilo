import { Timestamp } from "firebase/firestore";
import type {User} from "./UserType";
import {Status} from "../enums/Status";
import type {Project} from "./ProjectType";

export interface Task {
    id?: string,
    title: string,
    creator: User,
    creation_date: Date | Timestamp,
    last_editor?: User,
    edit_date?: Date | Timestamp,
    status: Status,
    due_date?: Date | Timestamp,
    assignees?: Array<User>,
    project: Project,
}