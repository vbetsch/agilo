import { InternPage } from "../components/templates/InternPage";
import { CardPage } from "../components/templates/CardPage";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import {logout, updateUserFirstname, updateUserLastname, updateUserMail} from "../database/queries";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components/buttons/SubmitButton";
import { AlternateButton } from "../components/buttons/AlternateButton";
import { FormField } from "../components/form/FormField";

export default function ProfilePage() {
    const [state, dispatch] = useContext(UserContext);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const navigate = useNavigate();

    const setFirstnameValue = async (): Promise<void> => {
        if (firstname.length > 0){
            try {
                await updateUserFirstname(firstname, dispatch, state.currentUser?.id)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const setLastnameValue = async (): Promise<void> => {
        if (lastname.length > 0){
            try {
                await updateUserLastname(lastname, dispatch, state.currentUser?.id)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const setMailValue = async (): Promise<void> => {
        if (mail.length > 0){
            try {
                await updateUserMail(mail, dispatch, state.currentUser?.id)
            } catch (e) {
                console.error(e)
            }
        }
    }

    const fields = [
        {
            type: "text",
            label: "Firstname",
            placeholder: state.currentUser?.firstname ?? "",
            value: firstname,
            onChange: setFirstname,
            editableAction: setFirstnameValue
        },
        {
            type: "text",
            label: "Lastname",
            placeholder: state.currentUser?.lastname ?? "",
            value: lastname,
            onChange: setLastname,
            editableAction: setLastnameValue
        },
        {
            type: "email",
            label: "Mail",
            placeholder: state.currentUser?.mail ?? "",
            value: mail,
            onChange: setMail,
            editableAction: setMailValue
        },
    ];

    return (
        <InternPage>
            <CardPage>
                <div className="profile-infos">
                    <div className="profile-infos-content">
                        <div className="profile-infos-head">
                            <div className="profile-head-content">
                                <img
                                    className="profile-head-picture"
                                    src={
                                        state.currentUser?.profile_picture ??
                                        "/img/default_user_picture.png"
                                    }
                                    alt="Profile picture"
                                />
                                <img
                                    className="profile-head-edit"
                                    src="/svg/edit.svg"
                                    alt="edit"
                                    onClick={() => console.log("todo")}
                                />
                            </div>
                        </div>
                        <div className="profile-infos-fields">
                            {fields.map((field, index) => (
                                <FormField
                                    key={index}
                                    type={field.type}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    onChange={field.onChange}
                                    editableAction={field.editableAction}
                                    editable={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="profile-buttons">
                        <AlternateButton label={"Change password"} />
                        <SubmitButton
                            label={"Logout"}
                            action={() => logout(dispatch, navigate, "/login")}
                        />
                    </div>
                </div>
            </CardPage>
        </InternPage>
    );
}
