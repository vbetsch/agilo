import {InternPage} from "../components/templates/InternPage";
import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";

export const ProjectsPage = () => (
    <InternPage>
        <BasicPage>
            <Title image={"/svg/project.svg"} text={"Projects"}/>
        </BasicPage>
    </InternPage>
)