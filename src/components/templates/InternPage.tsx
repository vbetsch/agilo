import { BasicMenu } from "../menu/BasicMenu";
import React, { PropsWithChildren, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
// import { useNavigate } from "react-router-dom";

export const InternPage: React.FC<PropsWithChildren> = ({ children }) => {
    // const navigate = useNavigate();
    const [state] = useContext(UserContext);
    useEffect(() => {
        if (!state.currentUser) {
            // navigate("/login");
            console.log("navigate to /login");
        }
    }, []);

    return (
        <div className="page">
            <BasicMenu />
            <div className="page-content">{children}</div>
        </div>
    );
};
