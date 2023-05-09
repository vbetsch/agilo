import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFilePicker} from "use-file-picker";
import {UserContext} from "../../../context/UserProvider";
import {UserField} from "../../../enums/UserField";
import {logout, updateUserField} from "../../../database/queries";
import {Form} from "../../../components/form/Form";
import {CardPage} from "../../../components/templates/CardPage";

export function ProfileFormPage() {
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
            editable: true,
            onChange: setFirstname,
            editableAction: () => setValue(UserField.FIRSTNAME, firstname, setFirstname)
        },
        {
            type: "text",
            label: "Lastname",
            placeholder: user.currentUser?.lastname ?? "",
            value: lastname,
            editable: true,
            onChange: setLastname,
            editableAction: () => setValue(UserField.LASTNAME, lastname, setLastname)
        },
        {
            type: "email",
            label: "Mail",
            placeholder: user.currentUser?.mail ?? "",
            value: mail,
            editable: true,
            onChange: setMail,
            editableAction: () => setValue(UserField.EMAIL, mail, setMail)
        },
    ];

    return (
        <CardPage>
            <Form
                fields={fields}
                error={errors.length > 0 && errors[0].fileSizeToolarge ? "Picture picked is too large" : ""}
                submitButton={{
                    label: "Logout",
                    action: () => logout(setUser, navigate, "/login")
                }}
                alternateButton={{
                    label: "Change password",
                    action: async () => await navigate("/profile/edit")
                }}
                imagePicker={{
                    fileSelector: openFileSelector,
                    defaultPicture: "/img/default_user_picture.png",
                    oldPicture: user.currentUser?.profile_picture,
                    selectedPicture: filesContent[0],
                    submitAction: () => setValue(UserField.PICTURE, filesContent[0].content)
                }}
            />
        </CardPage>
    )
}