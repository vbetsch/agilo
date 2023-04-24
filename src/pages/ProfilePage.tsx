import {InternPage} from "../components/templates/InternPage";
import {CardPage} from "../components/templates/CardPage";
import {useContext} from "react";
import {UserContext} from "../context/UserProvider";
import {logout} from "../database/queries";
import {useNavigate} from "react-router-dom";

export default function ProfilePage() {
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <InternPage>
            <CardPage>
                <div className="infos">
                    <p>Profile</p>
                    <p>ID {state.currentUser?.id}</p>
                    <p>Firstname {state.currentUser?.firstname}</p>
                    <p>Lastname {state.currentUser?.lastname}</p>
                    <p>Mail {state.currentUser?.mail}</p>
                    <button
                        className="button"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            logout(dispatch, navigate, "/login")
                                .then(r => {
                                    console.log("Success")
                                })
                                .catch(e => {
                                    console.error(e)
                                })
                        }}
                    >
                        <input
                            className="button-text"
                            type="submit"
                            value="Logout"
                        />
                    </button>
                </div>
            </CardPage>
        </InternPage>
    )
}