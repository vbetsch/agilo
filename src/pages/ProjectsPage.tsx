import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";
import {ProjectsList} from "../components/projects/ProjectsList";
import {ProjectsContext} from "../context/projects/ProjectsProvider";
import {useContext} from "react";

export function ProjectsPage() {
    const [state,] = useContext(ProjectsContext);

    return (
        <BasicPage>
            <Title image={"/svg/project.svg"} text={"Projects"}/>
            <ProjectsList projects={state.projects}/>
        </BasicPage>
    )
}