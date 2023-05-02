import { InternPage } from "../components/templates/InternPage";
import { CardPage } from "../components/templates/CardPage";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { logout } from "../database/queries";
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

    const fields = [
        {
            type: "text",
            label: "Firstname",
            placeholder: state.currentUser?.firstname ?? "",
            value: firstname,
            onChange: setFirstname,
            editable: true,
        },
        {
            type: "text",
            label: "Lastname",
            placeholder: state.currentUser?.lastname ?? "",
            value: lastname,
            onChange: setLastname,
            editable: true,
        },
        {
            type: "email",
            label: "Mail",
            placeholder: state.currentUser?.mail ?? "",
            value: mail,
            onChange: setMail,
            editable: true,
        },
    ];

    return (
        <InternPage>
            <CardPage>
                <div className="profile-infos">
                    <div className="profile-infos-content">
                        <div className="profile-infos-head">
                            <img
                                className="profile-infos-picture"
                                src={
                                    state.currentUser?.profile_picture ??
                                    "/img/default_user_picture.png"
                                }
                                alt="Profile picture"
                            />
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
                                    editable={field.editable}
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
