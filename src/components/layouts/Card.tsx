import React, {PropsWithChildren} from "react";

export const Card: React.FC<PropsWithChildren> = ({children}) => (
    <div className="card">
        <div className="card-content">
            {children}
        </div>
    </div>
)