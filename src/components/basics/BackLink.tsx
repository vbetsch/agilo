import {Link} from "react-router-dom";

interface BackProperties {
    href: string
}

export const BackLink = ({href}: BackProperties) => {
    return (
        <div className="backlink">
            <Link className="backlink-content" to={href}>
                <img className="backlink-img" src="/svg/arrow_left.svg" alt="back"/>
                <span className="backlink-txt">Back</span>
            </Link>
        </div>
    )
}