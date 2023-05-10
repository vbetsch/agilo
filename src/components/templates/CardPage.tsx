import React, {PropsWithChildren} from "react";

export const CardPage: React.FC<PropsWithChildren> = ({children}) => (
    <div className="card">
        <div className="card-content">
            {children}
        </div>
    </div>
)