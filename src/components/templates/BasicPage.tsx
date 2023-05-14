import React, {PropsWithChildren} from "react";
import {InternPage} from "./InternPage";

export const BasicPage: React.FC<PropsWithChildren> = ({children}) => (
    <InternPage>
        <div className="basic-page">
            {children}
        </div>
    </InternPage>
)