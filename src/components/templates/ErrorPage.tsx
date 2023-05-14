import React, {PropsWithChildren} from "react";
import {Page} from "../layouts/Page";

export const ErrorPage: React.FC<PropsWithChildren> = ({children}) => (
    <Page>
        <div className="page-error">
            <div className="page-error-text">
                {children}
            </div>
        </div>
    </Page>
)