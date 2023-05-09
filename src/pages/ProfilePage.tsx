import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import {UserContext} from "../context/UserProvider";
import {logout, updateUserField} from "../database/queries";
import {useNavigate} from "react-router-dom";
import {useFilePicker} from "use-file-picker";
import {UserField} from "../enums/UserField";
import {Form} from "../components/form/Form";

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
        <InternPage>
            <CardPage>
                <div className="profile-infos">
                    <Form
                        fields={fields}
                        error={errors.length > 0 && errors[0].fileSizeToolarge ? "Picture picked is too large" : ""}
                        submitLabel={"Logout"}
                        submitAction={() => logout(setUser, navigate, "/login")}
                        altBtnLabel={"Change password"}
                        altBtnAction={async () => await navigate("/profile/edit")}
                        picture={true}
                        defaultPicture={"/img/default_user_picture.png"}
                        oldPicture={user.currentUser?.profile_picture}
                        selectedFile={filesContent[0]}
                        fileSelector={openFileSelector}
                        pictureAction={() => setValue(UserField.PICTURE, filesContent[0].content)}
                    />
                </div>
            </CardPage>
        </InternPage>
    );
}
