import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";
import {ProjectsList} from "../components/projects/ProjectsList";
import {Tasks} from "../components/tasks/Tasks";

export const DashboardPage = () => (
    <BasicPage>
        <Title image={"/svg/project.svg"} text={"Projects"}/>
        <ProjectsList />
        <Title image={"/svg/tasks.svg"} text={"Tasks"}/>
        <Tasks />
    </BasicPage>
)