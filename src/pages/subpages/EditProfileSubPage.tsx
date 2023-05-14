import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFilePicker} from "use-file-picker";
import {UserContext} from "../../context/user/UserProvider";
import {UserField} from "../../enums/UserField";
import {logout, updateUserField} from "../../database/queries/UserQueries";
import {Form} from "../../components/form/Form";
import {Card} from "../../components/layouts/Card";

export function EditProfileSubPage() {
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
            line: "top",
            placeholder: user.currentUser?.firstname ?? "",
            value: firstname,
            editable: true,
            onChange: setFirstname,
            editableAction: () => setValue(UserField.FIRSTNAME, firstname, setFirstname)
        },
        {
            type: "text",
            label: "Lastname",
            line: "top",
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
        <Card>
            <Form
                fields={fields}
                error={errors.length > 0 && errors[0].fileSizeToolarge ? "Picture picked is too large" : ""}
                submitButton={{
                    label: "Logout",
                    action: async () => logout(setUser, navigate, "/login")
                }}
                alternateButton={{
                    label: "Change password",
                    action: async () => await navigate("/profile/edit")
                }}
                imagePicker={{
                    fileSelector: openFileSelector,
                    defaultPicturePath: "/img/default_user_picture.png",
                    oldPicturePath: user.currentUser?.profile_picture,
                    selectedPicture: filesContent[0],
                    submitAction: () => setValue(UserField.PICTURE, filesContent[0].content)
                }}
            />
        </Card>
    )
}