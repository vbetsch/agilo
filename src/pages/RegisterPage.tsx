import { useContext, useState } from "react";
import AuthPage from "../components/templates/AuthPage";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { CollectionReference, addDoc, collection, getDoc } from "firebase/firestore";
import { User } from "../types/UserType";
import { db } from "../config/firebase";
import { UserActionType } from "../context/UserReducer";

export default function RegisterPage() {
    const [, dispatch] = useContext(UserContext);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();
    const redirect = () => {
        navigate("/login");
    };
    
    const addUser = async () => {
        if (
            firstname.length > 0 &&
            lastname.length > 0 &&
            mail.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0
        ) {
            if (password === confirmPassword) {
                setError("");

                try {
                    const docRef = await addDoc<User>(
                        collection(db, "users") as CollectionReference<User>,
                        {
                            firstname,
                            lastname,
                            mail,
                            authenticationString: password,
                        }
                    );

                    const doc = await getDoc(docRef);
                    const data = doc.data();

                    if (data) {
                        dispatch({
                            type: UserActionType.ADD_USERS,
                            payload: {
                                id: doc.id,
                                ...data,
                            },
                        });
                    }

                    redirect();
                } catch (e) {
                    console.error(e);
                }
            } else {
                setError("Password and ConfirmPassword are not same");
            }
        } else {
            setError("Please fill in all required fields");
        }
    };

    return (
        <AuthPage formLabel={"Register"} formAction={addUser} formError={error} formFields={[
            {
                type: "text",
                label: "Firstname",
                placeholder: "John",
                value: firstname,
                onChange: setFirstname,
                required: true
            },
            {
                type: "text",
                label: "Lastname",
                placeholder: "Scott",
                value: lastname,
                onChange: setLastname,
                required: true
            },
            {
                type: "email",
                label: "Email",
                placeholder: "john.scott@email.com",
                value: mail,
                onChange: setMail,
                required: true
            },
            {
                type: "password",
                label: "Password",
                placeholder: "****************",
                value: password,
                onChange: setPassword,
                required: true
            },
            {
                type: "password",
                label: "Confirm Password",
                placeholder: "****************",
                value: confirmPassword,
                onChange: setConfirmPassword,
                required: true
            }
        ]}/>
    )
}