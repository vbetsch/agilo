import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import {useContext} from "react";
import {UserContext} from "../context/UserProvider";
import {logout} from "../database/queries";
import {useNavigate} from "react-router-dom";
import {SubmitButton} from "../components/buttons/SubmitButton";
import {AlternateButton} from "../components/buttons/AlternateButton";

export default function ProfilePage() {
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <InternPage>
            <CardPage>
                <div className="profile-infos">
                    <div className="profile-infos-content">
                        <div className="profile-infos-head">
                            <img className="profile-infos-picture" src={state.currentUser?.profile_picture ?? "/img/default_user_picture.png"}
                                 alt="Profile picture"/>
                        </div>
                        <div className="profile-infos-fields">

                            <div className="form-field">
                                <label className="form-label" htmlFor="firstname">Firstname</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder={state.currentUser?.firstname}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" htmlFor="lastname">Lastname</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder={state.currentUser?.lastname}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" htmlFor="mail">Mail</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="mail"
                                    name="mail"
                                    placeholder={state.currentUser?.mail}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="profile-buttons">
                        <AlternateButton label={"Change password"}/>
                        <SubmitButton label={"Logout"} action={() => logout(dispatch, navigate, "/login")}/>
                    </div>
                </div>
            </CardPage>
        </InternPage>
    )
}