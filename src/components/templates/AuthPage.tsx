import {CardPage} from "./CardPage";
import {Form} from "../form/Form";
import {FormFieldProperties} from "../form/FormField";
import {SubmitButtonProperties} from "../buttons/SubmitButton";

export interface AuthPageProperties {
    formError: string
    formFields: Array<FormFieldProperties>
    formButton: SubmitButtonProperties
}

export default function AuthPage({formFields, formError, formButton}: AuthPageProperties) {
    return (
        <CardPage>
            <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo"/>
            <Form fields={formFields} error={formError} submitButton={{label: formButton.label, action: formButton.action}}/>
        </CardPage>
    )
}