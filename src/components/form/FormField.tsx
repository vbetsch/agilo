export interface FormFieldProperties {
    type: string
    label: string
    placeholder: string
    required?: boolean
}

export function FormField({type, label, placeholder, required}: FormFieldProperties) {
    const labelId = label.replace(/\s/g, "")

    return (
        <div className="form-field">
            <label className="form-label" htmlFor={labelId}>{label}{required && "*"}</label>
            <input
                className="form-input"
                type={type}
                id={labelId}
                name={labelId}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}