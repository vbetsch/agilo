import {Link, useLocation} from "react-router-dom";

export interface MenuItemProperties {
    img: string
    text: string
    href?: string
}

export function MenuItem({img, text, href}: MenuItemProperties) {
    let defaultItemContent = "menu-item";
    let defaultImgClassName = "menu-item-"
    const fileExtension = img.split('/').reverse()[0].split('.').pop()

    const location = useLocation();
    const currentRoute = location.pathname;

    if (currentRoute.split('/').reverse()[0].toLowerCase() === text.toLowerCase()) {
        defaultItemContent += " background-blue"
    }

    if (fileExtension === "jpg" || fileExtension === "png") {
        defaultImgClassName += "img"
    } else if (fileExtension === "svg") {
        defaultImgClassName += fileExtension
    }

    return (
        <div className={defaultItemContent}>
            <div className="menu-item-content">
                <img className={defaultImgClassName} src={img} alt={text + " logo"}/>
                <Link className="menu-item-link" to={href ?? currentRoute}>
                    <span className="menu-item-text">{text}</span>
                </Link>
            </div>
        </div>
    )
}