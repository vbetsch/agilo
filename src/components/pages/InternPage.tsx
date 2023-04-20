import {BasicMenu} from "../BasicMenu";
import React, {PropsWithChildren} from "react";

export const InternPage: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="page">
            <BasicMenu/>
            {children}
        </div>
    );
};