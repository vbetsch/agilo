import {CardPage} from "./CardPage";
import {Form} from "../form/Form";
import {FormFieldProperties} from "../form/FormField";
import {ButtonProperties} from "../basics/Button";

export interface AuthPageProperties {
    formError: string
    formFields: Array<FormFieldProperties>
    formButton: ButtonProperties
}

export const AuthPage = ({formFields, formError, formButton}: AuthPageProperties) => (
    <CardPage>
        <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo"/>
        <Form fields={formFields} error={formError}
              submitButton={{label: formButton.label, action: formButton.action}}/>
    </CardPage>
)
