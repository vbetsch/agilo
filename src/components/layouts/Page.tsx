import React, {PropsWithChildren} from "react";

export const Page: React.FC<PropsWithChildren> = ({children}) => (
    <div className="page">
        {children}
    </div>
)