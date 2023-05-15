import {StatusValues} from "../../enums/StatusValues";

export interface StatusProperties {
    status: StatusValues
}

export function Status({status}: StatusProperties) {
    let statusTextClassName: string = "status-text background-"

    switch(status) {
        case StatusValues.TODO:
            statusTextClassName += "red";
            break;
        case StatusValues.IN_PROGRESS:
            statusTextClassName += "orange";
            break;
        case StatusValues.DONE:
            statusTextClassName += "green";
            break;
    }

    return (
        <div className="status">
            <p className={statusTextClassName}>{status}</p>
        </div>
    )
}