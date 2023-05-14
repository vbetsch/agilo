import React, {SetStateAction} from "react";
import {DirectLink, DirectLinkProperties} from "../basics/DirectLink";

export interface FormFieldProperties {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: React.Dispatch<SetStateAction<string>>;
    line?: string;
    required?: boolean;
    editableAction?: () => Promise<void>;
    subLink?: DirectLinkProperties;
}

export function FormField({
                              type,
                              label,
                              placeholder,
                              value,
                              onChange,
                              required,
                              editableAction,
                              subLink
                          }: FormFieldProperties) {
    const labelId = label.replace(/\s/g, "");
    console.log(subLink)

    return (
        <div className="form-field">
            <label className="form-label" htmlFor={labelId}>
                {label}
                {!editableAction && required && "*"}
            </label>

            <div className="form-input">
                {editableAction || required ? (
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

                {editableAction && (
                    <img
                        className="form-input-img-edit"
                        src="/svg/edit.svg"
                        alt="edit"
                    />
                )}

                {editableAction && (
                    <img
                        className="form-input-img-save"
                        src="/svg/save.svg"
                        alt="save"
                        onClick={(e) => {
                            e.preventDefault();
                            editableAction();
                        }}
                    />
                )}
            </div>
            {subLink && <DirectLink href={subLink.href} text={subLink.text}/>}
        </div>
    );
}
