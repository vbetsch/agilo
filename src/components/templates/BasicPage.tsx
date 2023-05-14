import React, {PropsWithChildren} from "react";

export const BasicPage: React.FC<PropsWithChildren> = ({children}) => (
    <div className="basic-page">
        {children}
    </div>
)