import {Menu} from "./Menu";
import {useContext} from "react";
import {UserContext} from "../../context/UserProvider";

export function BasicMenu() {
    const [user,] = useContext(UserContext);

    return (
        <Menu items={[
            {
                img: user.currentUser?.profile_picture ?? "/img/default_user_picture.png",
                text: "Profile",
                href: "/profile",
                rounded: true
            },
            {
                img: "/svg/home.svg",
                text: "Dashboard",
                href: "/dashboard"
            },
            {
                img: "/svg/project.svg",
                text: "Projects",
                href: "/projects"
            },
            {
                img: "/svg/settings.svg",
                text: "Settings"
            }
        ]}/>
    )
}