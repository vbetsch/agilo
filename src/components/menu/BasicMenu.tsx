import {Menu} from "./Menu";

export function BasicMenu() {
    return (
        <Menu items={[
            {
                img: "/img/harry.jpg",
                text: "Profile",
                href: "/profile"
            },
            {
                img: "/svg/home.svg",
                text: "Dashboard",
                href: "/dashboard"
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