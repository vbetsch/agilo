import {CardPage} from "./CardPage";
import {Form} from "../form/Form";
import {FormFieldProperties} from "../form/FormField";

export interface AuthPageProperties {
    formLabel: string
    formFields: Array<FormFieldProperties>
    formAction: () => Promise<void>
    formError: string
}

export default function AuthPage({formLabel, formFields, formAction, formError} :AuthPageProperties) {
    return (
        <CardPage>
            <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo"/>
            <Form label={formLabel} fields={formFields} action={formAction} error={formError} />
        </CardPage>
    )
}