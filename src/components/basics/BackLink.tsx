import {Link} from "react-router-dom";

interface BackProperties {
    href: string
}

export const BackLink = ({href}: BackProperties) => (
    <div className="backlink">
        <Link className="link-content backlink-content" to={href}>
            <img className="backlink-img" src="/svg/arrow_left.svg" alt="back"/>
            <span className="link-txt">Back</span>
        </Link>
    </div>
)
