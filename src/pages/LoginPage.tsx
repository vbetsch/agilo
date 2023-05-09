import {useContext, useState} from "react";
import AuthPage from "../components/templates/AuthPage";
import {findUser} from "../database/queries";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserProvider";

export default function LoginPage() {
    const [, setUser] = useContext(UserContext);
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const testUser = async () => {
        if (mail.length > 0 && password.length > 0) {
            try {
                await findUser(mail, password, setUser, navigate, "/profile");
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    console.error(e)
                }
            }
        } else {
            setError("Please fill in all required fields");
        }
    };

    return (
        <AuthPage
            formLabel={"Login"}
            formAction={testUser}
            formError={error}
            formFields={[
                {
                    type: "email",
                    label: "Email",
                    placeholder: "john.scott@email.com",
                    value: mail,
                    onChange: setMail,
                    required: true,
                },
                {
                    type: "password",
                    label: "Password",
                    placeholder: "****************",
                    value: password,
                    onChange: setPassword,
                    required: true,
                },
            ]}
        />
    );
}
