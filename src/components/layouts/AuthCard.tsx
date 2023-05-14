import {Form} from "../form/Form";
import {FormFieldProperties} from "../form/FormField";
import {ButtonProperties} from "../basics/Button";
import {DirectLink} from "../basics/DirectLink";
import {Card} from "./Card";
import {Loading} from "../basics/Loading";

export interface AuthCardProperties {
    formError: string
    formFields: Array<FormFieldProperties>
    formButton: ButtonProperties
    loading?: boolean
}

export const AuthCard = ({formFields, formError, formButton, loading}: AuthCardProperties) => (
    <Card>
        <div className={loading ? "card-content isLoading" : "card-content"}>
            <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo"/>
            <Form fields={formFields} error={formError}
                  submitButton={{label: formButton.label, action: formButton.action}}/>
            <div className="auth-links">
                {location.pathname === "/login" ?
                    <DirectLink href={"/register"} text={"I don't have an account"}/> :
                    <DirectLink href={"/login"} text={"I already have an account"}/>}
            </div>
        </div>
        {loading && (
            <Loading/>
        )}
    </Card>
)
