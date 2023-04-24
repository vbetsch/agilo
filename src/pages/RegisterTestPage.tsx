import { CardPage } from "../components/templates/CardPage";
import { UserContext } from "../context/UserProvider";
import React, { useContext, useState } from "react";
import {
    addDoc,
    collection,
    CollectionReference,
    getDoc,
} from "firebase/firestore";
import { User } from "../types/UserType";
import { db } from "../database/firebase";
import { UserActionType } from "../context/UserReducer";
import { useNavigate } from "react-router-dom";

const RegisterTestPage: React.FC = () => {
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
        <CardPage>
            <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo" />
            <form className="form">
                <div className="form-fields">
                    <div className="form-field">
                        <label className="form-label" htmlFor="firstname">
                            Firstname*
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="John"
                            value={firstname}
                            onChange={(event) =>
                                setFirstname(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="lastname">
                            Lastname*
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Scott"
                            value={lastname}
                            onChange={(event) =>
                                setLastname(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="email">
                            Email*
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john.scott@email.com"
                            value={mail}
                            onChange={(event) => setMail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="password">
                            Password*
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="****************"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label" htmlFor="ConfirmPassword">
                            Confirm Password*
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            id="ConfirmPassword"
                            name="ConfirmPassword"
                            placeholder="****************"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />
                    </div>
                </div>
                {error.length > 0 && <p>{error}</p>}
                <div className="form-validate">
                    <button
                        className="button"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            addUser();
                        }}
                    >
                        <input
                            className="button-text"
                            type="submit"
                            value="Register"
                        />
                    </button>
                </div>
            </form>
        </CardPage>
    );
};

export default RegisterTestPage;
