import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";
import {ProjectsContext} from "../context/projects/ProjectsProvider";
import {useContext} from "react";
import {Outlet} from "react-router-dom";

export function ProjectsPage() {
    const [projects,] = useContext(ProjectsContext);

    return (
        <BasicPage>
            <Title image={"/svg/project.svg"} text={"Projects"} subTitle={projects.currentProject?.label}/>
            <Outlet/>
        </BasicPage>
    )
}