import { Project } from "../../types/ProjectType";
import {ProjectItem} from "./ProjectItem";

interface ProjectsListProperties {
    projects: Array<Project>
}

export function ProjectsList({projects}: ProjectsListProperties) {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <ProjectItem key={index} title={project.label} img={project.picture} />
            ))}
            <div className="project" style={{placeItems: "center", justifyContent: "center", boxShadow: "none"}}>
                <img src="/svg/plus.svg" alt="+" onClick={() => console.log("TODO: Add")}/>
            </div>
        </div>
    )
}