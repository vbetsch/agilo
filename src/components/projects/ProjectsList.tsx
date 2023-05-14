import {ProjectItem, ProjectItemProperties} from "./ProjectItem";

interface ProjectsListProperties {
    projects: Array<ProjectItemProperties>
}

export function ProjectsList({projects}: ProjectsListProperties) {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <ProjectItem key={index} title={project.title} img={project.img} />
            ))}
            <div className="project" style={{placeItems: "center", justifyContent: "center", boxShadow: "none"}}>
                <img src="/svg/plus.svg" alt="+" onClick={() => console.log("TODO: Add")}/>
            </div>
        </div>
    )
}