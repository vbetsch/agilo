import React from "react";
import {Outlet} from "react-router-dom";
import {Page} from "../components/layouts/Page";

export const LoginPage = () => (
    <Page>
        <Outlet/>
    </Page>
)
