import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import {BackLink} from "../components/browse/BackLink";
import React, {useContext, useState} from "react";
import {updateUserField} from "../database/queries";
import {UserField} from "../enums/UserField";
import {UserContext} from "../context/UserProvider";
import {Form} from "../components/form/Form";
import {useNavigate} from "react-router-dom";

export default function EditPage() {
    const [user, setUser] = useContext(UserContext);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const fields = [
        {
            type: "password",
            label: "Password",
            placeholder: "****************",
            value: password,
            onChange: setPassword,
            required: true
        },
        {
            type: "password",
            label: "Confirm Password",
            placeholder: "****************",
            value: confirmPassword,
            onChange: setConfirmPassword,
            required: true
        }
    ]

    const changePassword = async (): Promise<void> => {
        if (password === confirmPassword) {
            setError("");
            try {
                await updateUserField(UserField.PASSWORD, password, setUser, user.currentUser?.id);
                navigate("/profile");
            } catch (e) {
                console.error(e)
            } finally {
                setPassword("");
                setConfirmPassword("");
            }
        } else {
            setError("Passwords fields don't have same values");
        }
    }

    return (
        <InternPage>
            <CardPage>
                <BackLink href={"/profile"}/>
                <Form submitLabel={"Update"} submitAction={changePassword} error={error} fields={fields}/>
            </CardPage>
        </InternPage>
    )
}