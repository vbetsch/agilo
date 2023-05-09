import React from "react";
import {InternPage} from "../components/templates/InternPage";
import {Outlet} from "react-router-dom";

export default function ProfilePage() {
    return (
        <InternPage>
            <Outlet/>
        </InternPage>
    );
}
