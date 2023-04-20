import {CardPage} from "./CardPage";
import {Form} from "../form/Form";
import {FormFieldProperties} from "../form/FormField";

export interface AuthPageProperties {
    formLabel: string
    formFields: Array<FormFieldProperties>
}

export default function AuthPage({formLabel, formFields} :AuthPageProperties) {
    return (
        <CardPage>
            <img className="auth-logo" src="/img/logo.png" alt="Logo Agilo"/>
            <Form label={formLabel} fields={formFields}/>
        </CardPage>
    )
}