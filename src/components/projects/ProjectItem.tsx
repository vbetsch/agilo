export interface ProjectItemProperties {
    title: string
    img: string
}

export const ProjectItem = ({title, img}: ProjectItemProperties) => (
    <div className="project" style={{backgroundImage: `url(${img})`}} onClick={() => console.log("TODO: Edit")}>
        <p className="project-text">{title}</p>
    </div>
)