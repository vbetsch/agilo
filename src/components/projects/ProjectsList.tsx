import { Project } from "../../types/ProjectType";
import {ProjectItem} from "./ProjectItem";
import {Loading} from "../basics/Loading";

interface ProjectsListProperties {
    projects: Array<Project>
    loading: boolean
}

export function ProjectsList({projects, loading}: ProjectsListProperties) {
    return (
        <div className="projects">
            {loading && (
                <Loading/>
            )}
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project}/>
            ))}
            <div className="project" style={{placeItems: "center", justifyContent: "center", boxShadow: "none"}}>
                <img src="/svg/plus.svg" alt="+" onClick={() => console.log("TODO: Add")}/>
            </div>
        </div>
    )
}