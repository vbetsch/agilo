import React, {PropsWithChildren} from "react";

export const ErrorPage: React.FC<PropsWithChildren> = ({children}) => (
    <div className="page">
        <div className="page-error">
            <div className="page-error-text">
                {children}
            </div>
        </div>
    </div>
)