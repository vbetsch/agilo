import {BasicMenu} from "../menu/BasicMenu";
import React, {PropsWithChildren, useContext, useEffect} from "react";
import {UserContext} from "../../context/user/UserProvider";
import {Page} from "../layouts/Page";
// import { useNavigate } from "react-router-dom";

export const InternPage: React.FC<PropsWithChildren> = ({children}) => {
    // const navigate = useNavigate();
    const [user] = useContext(UserContext);
    useEffect(() => {
        if (!user.currentUser) {
            // navigate("/login");
            console.log("navigate to /login");
        }
    }, []);

    return (
        <Page>
            <BasicMenu/>
            <div className="page-content">{children}</div>
        </Page>
    );
};
