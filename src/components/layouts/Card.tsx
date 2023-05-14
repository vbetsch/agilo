import React, {PropsWithChildren} from "react";

export const Card: React.FC<PropsWithChildren> = ({children}) => (
    <div className="card-page">
        <div className="card">
            {children}
        </div>
    </div>
)