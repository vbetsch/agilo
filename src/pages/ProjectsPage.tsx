import {InternPage} from "../components/templates/InternPage";
import {BasicPage} from "../components/templates/BasicPage";
import {Title} from "../components/basics/Title";
import {ProjectsList} from "../components/projects/ProjectsList";

export const ProjectsPage = () => (
    <InternPage>
        <BasicPage>
            <Title image={"/svg/project.svg"} text={"Projects"}/>
            <ProjectsList projects={[
                {
                    title: "Tech Company",
                    img: "/img/tech_company.jpg"
                },
                {
                    title: "City News",
                    img: "/img/city_news.jpg"
                },
                {
                    title: "Management",
                    img: "/img/management.jpg"
                },
                {
                    title: "Hackaton",
                    img: "/img/hackaton.jpg"
                },
                {
                    title: "Personal",
                    img: "/img/personal.jpg"
                }
            ]}/>
        </BasicPage>
    </InternPage>
)