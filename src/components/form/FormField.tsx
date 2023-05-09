import React, { SetStateAction } from "react";

export interface FormFieldProperties {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: React.Dispatch<SetStateAction<string>>;
    required?: boolean;
    editable?: boolean;
    editableAction?: () => Promise<void>;
}

export function FormField({
    type,
    label,
    placeholder,
    value,
    onChange,
    required,
    editable,
    editableAction
}: FormFieldProperties) {
    const labelId = label.replace(/\s/g, "");

    return (
        <div className="form-field">
            <label className="form-label" htmlFor={labelId}>
                {label}
                {!editable && required && "*"}
            </label>

            <div className="form-input">
                {editable || required ? (
                    <input
                        required
                        className="form-input-text"
                        type={type}
                        id={labelId}
                        name={labelId}
                        placeholder={placeholder}
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                    />
                ) : (
                    <input
                        className="form-input-text"
                        type={type}
                        id={labelId}
                        name={labelId}
                        placeholder={placeholder}
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                    />
                )}

                {editable && (
                    <img
                        className="form-input-img-edit"
                        src="/svg/edit.svg"
                        alt="edit"
                    />
                )}

                {editable && (
                    <img
                        className="form-input-img-save"
                        src="/svg/save.svg"
                        alt="save"
                        onClick={(e) => {
                            e.preventDefault();
                            editableAction && editableAction();
                        }}
                    />
                )}
            </div>
        </div>
    );
}
