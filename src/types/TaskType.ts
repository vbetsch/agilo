import { Timestamp } from "firebase/firestore";
import type {User} from "./UserType";
import type {Project} from "./ProjectType";
import {StatusValues} from "../enums/StatusValues";

export interface Task {
    id?: string,
    title: string,
    creator: User,
    creation_date: Date | Timestamp,
    last_editor?: User,
    edit_date?: Date | Timestamp,
    status: StatusValues,
    due_date?: Date | Timestamp,
    assignees?: Array<User>,
    project: Project,
}