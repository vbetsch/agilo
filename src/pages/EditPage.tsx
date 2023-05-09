import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import {BackLink} from "../components/browse/BackLink";
import React, {useContext, useState} from "react";
import {FormField} from "../components/form/FormField";
import {SubmitButton} from "../components/buttons/SubmitButton";
import {updateUserField} from "../database/queries";
import {UserField} from "../enums/UserField";
import {UserContext} from "../context/UserProvider";

export default function EditPage() {
    const [user, setUser] = useContext(UserContext);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const fields = [
        {
            label: "Password",
            value: password,
            onChange: setPassword
        },
        {
            label: "Confirm Password",
            value: confirmPassword,
            onChange: setConfirmPassword
        }
    ]

    const changePassword = async (): Promise<void> => {
        if (password === confirmPassword) {
            setError("");
            try {
                await updateUserField(UserField.PASSWORD, password, setUser, user.currentUser?.id);
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
                <form className="form">
                    <div className="form-fields">
                        {fields.map((field, index) => (
                            <FormField
                                key={index}
                                type={"password"}
                                label={field.label}
                                placeholder={"****************"}
                                value={field.value}
                                onChange={field.onChange}
                                required={true}
                            />
                        ))}
                    </div>
                    <div className="form-error">
                        {error && error.length > 0 && <p>{error}</p>}
                    </div>
                    <div className="form-validate">
                        <SubmitButton label={"Update"} action={changePassword}/>
                    </div>
                </form>
            </CardPage>
        </InternPage>
    )
}