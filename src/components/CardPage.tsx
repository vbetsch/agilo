import React, {PropsWithChildren} from "react";

export const CardPage: React.FC<PropsWithChildren> = ({children}) =>  {
    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};