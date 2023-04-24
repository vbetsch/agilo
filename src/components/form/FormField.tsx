import { SetStateAction } from "react";

export interface FormFieldProperties {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: React.Dispatch<SetStateAction<string>>;
    required?: boolean;
}

export function FormField({
    type,
    label,
    placeholder,
    value,
    onChange,
    required,
}: FormFieldProperties) {
    const labelId = label.replace(/\s/g, "");

    return (
        <div className="form-field">
            <label className="form-label" htmlFor={labelId}>
                {label}
                {required && "*"}
            </label>
            {required ?? (
                <input
                    required
                    className="form-input"
                    type={type}
                    id={labelId}
                    name={labelId}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
            )}
            <input
                className="form-input"
                type={type}
                id={labelId}
                name={labelId}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}
