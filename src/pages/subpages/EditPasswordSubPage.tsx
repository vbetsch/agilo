import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/user/UserProvider";
import {BackLink} from "../../components/basics/BackLink";
import {Form} from "../../components/form/Form";
import {updateUserField} from "../../database/queries/UserQueries";
import {UserField} from "../../enums/UserField";
import {Card} from "../../components/layouts/Card";
import {Loading} from "../../components/basics/Loading";

interface PageProperties {
    parentPage: string;
}

export default function EditPasswordSubPage({parentPage}: PageProperties) {
    const [user, setUser] = useContext(UserContext);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const fields = [
        {
            type: "password",
            label: "Password",
            value: password,
            onChange: setPassword,
            required: true,
            hidden: true
        },
        {
            type: "password",
            label: "Confirm Password",
            value: confirmPassword,
            onChange: setConfirmPassword,
            required: true,
            hidden: true
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
        <Card>
            <div className={user.loading ? "card-content isLoading" : "card-content"}>
                <BackLink href={parentPage}/>
                <Form submitButton={{label: "Update", action: changePassword}} error={error} fields={fields} validators={[{
                    fieldName: "password",
                    fieldValue: password,
                    limitChar: 8,
                    containsLowerCase: true,
                    containsUpperCase: true,
                    containsSpecialChar: true,
                }]}/>
            </div>
            {user.loading && (
                <Loading/>
            )}
        </Card>
    )
}