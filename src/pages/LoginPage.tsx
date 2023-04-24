import { useState } from "react";
import AuthPage from "../components/templates/AuthPage";
import { useNavigate } from "react-router-dom";
import { collection, query, where, limit, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../config/firebase";

export default function LoginPage() {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();
    const redirect = () => {
        navigate("/dashboard");
    };

    const testUser = async () => {
        if (mail.length > 0 && password.length > 0) {
            try {
                const docRef = query(
                    collection(db, "users"),
                    where("mail", "==", mail),
                    where("authenticationString", "==", password),
                    limit(1)
                );
                const users = await getDocs(docRef);
                
                if (users.size === 1) {
                    let data: DocumentData
                    
                    users.forEach((doc) => {
                        data = doc.data();
                        console.log(data);
                    });

                    redirect();
                } else {
                    setError("Requested credentials do not match any account");
                }
            } catch (e) {
                console.error(e);
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
