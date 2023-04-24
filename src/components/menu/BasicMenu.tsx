import {Menu} from "./Menu";
import {useContext} from "react";
import {UserContext} from "../../context/UserProvider";

export function BasicMenu() {
    const [state,] = useContext(UserContext);

    return (
        <Menu items={[
            {
                img: state.currentUser?.profile_picture ?? "/img/default_user_picture.png",
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