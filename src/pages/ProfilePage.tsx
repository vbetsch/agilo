import React from "react";
import {InternPage} from "../components/templates/InternPage";
import {Outlet} from "react-router-dom";

export const ProfilePage = () => (
    <InternPage>
        <Outlet/>
    </InternPage>
)
