import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import {UserContext} from "../context/UserProvider";
import {logout, updateUserField} from "../database/queries";
import {useNavigate} from "react-router-dom";
import {SubmitButton} from "../components/buttons/SubmitButton";
import {AlternateButton} from "../components/buttons/AlternateButton";
import {FormField} from "../components/form/FormField";
import {useFilePicker} from "use-file-picker";
import {UserField} from "../enums/UserField";

export default function ProfilePage() {
    const [user, setUser] = useContext(UserContext);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const navigate = useNavigate();

    const [openFileSelector, {filesContent, errors}] = useFilePicker({
        readAs: 'DataURL',
        accept: ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'],
        limitFilesConfig: {max: 1},
        maxFileSize: 0.9,
    });

    const setValue = async (field: UserField, inputValue: string, setter?: Dispatch<SetStateAction<string>>): Promise<void> => {
        if (inputValue.length > 0) {
            try {
                await updateUserField(field, inputValue, setUser, user.currentUser?.id)
            } catch (e) {
                console.error(e)
            } finally {
                setter && setter("");
            }
        }
    }

    const fields = [
        {
            type: "text",
            label: "Firstname",
            placeholder: user.currentUser?.firstname ?? "",
            value: firstname,
            onChange: setFirstname,
            editableAction: () => setValue(UserField.FIRSTNAME, firstname, setFirstname)
        },
        {
            type: "text",
            label: "Lastname",
            placeholder: user.currentUser?.lastname ?? "",
            value: lastname,
            onChange: setLastname,
            editableAction: () => setValue(UserField.LASTNAME, lastname, setLastname)
        },
        {
            type: "email",
            label: "Mail",
            placeholder: user.currentUser?.mail ?? "",
            value: mail,
            onChange: setMail,
            editableAction: () => setValue(UserField.EMAIL, mail, setMail)
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
                                    src={filesContent[0]?.content ?? user.currentUser?.profile_picture ?? "/img/default_user_picture.png"}
                                    alt="Profile picture"
                                    onClick={() => {
                                        try {
                                            openFileSelector();
                                        } catch (err) {
                                            console.log(err);
                                        }
                                    }}
                                />
                                {!filesContent[0] || user.currentUser?.profile_picture === filesContent[0].content ? (
                                    <img
                                        className="profile-head-icon"
                                        src="/svg/edit.svg"
                                        alt="edit"
                                    />
                                ) : (
                                    <img
                                        className="profile-head-icon"
                                        src="/svg/save.svg"
                                        alt="save"
                                        onClick={() => setValue(UserField.PICTURE, filesContent[0].content)}
                                    />
                                )}
                            </div>
                            {errors.length > 0 && (<p className="form-error">An error has occurred{
                                errors[0].fileSizeToolarge && ": picture picked is too large"
                            }</p>)}
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
                        <AlternateButton label={"Change password"} action={async () => await navigate("/profile/edit")}/>
                        <SubmitButton
                            label={"Logout"}
                            action={() => logout(setUser, navigate, "/login")}
                        />
                    </div>
                </div>
            </CardPage>
        </InternPage>
    );
}
