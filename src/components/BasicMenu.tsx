import {Menu} from "./Menu";

export function BasicMenu() {
    return (
        <Menu items={[
            {
                img: "/img/harry.jpg",
                text: "Profile"
            },
            {
                img: "/svg/home.svg",
                text: "Dashboard"
            },
            {
                img: "/svg/project.svg",
                text: "Projects"
            },
            {
                img: "/svg/settings.svg",
                text: "Settings"
            }
        ]}/>
    )
}