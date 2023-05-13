import {Link} from "react-router-dom";

export interface DirectLinkProperties {
    href: string
    text: string
}

export const DirectLink = ({href, text}: DirectLinkProperties) => (
    <div className="directlink">
        <Link className="link-content" to={href}>
            <span className="link-txt">{text}</span>
        </Link>
    </div>
)
