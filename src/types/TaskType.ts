import { Timestamp } from "firebase/firestore";
import type {User} from "./UserType";
import type {Project} from "./ProjectType";
import {StatusValues} from "../enums/StatusValues";

export interface Task {
    id?: string,
    title: string,
    creator?: User,
    creation_date: Date | Timestamp,
    project?: Project,
    status?: StatusValues,
    last_editor?: User,
    edit_date?: Date | Timestamp,
    due_date?: Date | Timestamp,
    assignees?: Array<User>,
}