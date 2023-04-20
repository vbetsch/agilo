// import {useForm} from "react-hook-form";
import {FormButton} from "./FormButton";
import {FormField, FormFieldProperties} from "./FormField";

interface FormProperties {
    label: string
    fields: Array<FormFieldProperties>
}

export function Form({label, fields} :FormProperties) {
    // const { register, handleSubmit, formState } = useForm<UserLoginDto>()
    // const { errors } = formState

    return (
        <form className="form">
            <div className="form-fields">
                {fields.map((field, index) => (
                    <FormField key={index} type={field.type} label={field.label} placeholder={field.placeholder} required={field.required} />
                ))}
            </div>
            <div className="form-errors">
                {/*{errors.Username && (<p className="error">Username is required</p>)}*/}
            </div>
            <FormButton id={"signin"} value={label} />
        </form>
    )
}