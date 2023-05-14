import React, {SetStateAction, useState} from "react";
import {DirectLink, DirectLinkProperties} from "../basics/DirectLink";

export interface FormFieldProperties {
    type: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: React.Dispatch<SetStateAction<string>>;
    line?: string;
    required?: boolean;
    hidden?: boolean;
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
                              subLink,
                              hidden
                          }: FormFieldProperties) {
    const labelId = label.replace(/\s/g, "");
    const [visible, setVisible] = useState(false);

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
                        type={hidden ? (visible ? "text" : "password") : type}
                        id={labelId}
                        name={labelId}
                        placeholder={hidden ? (visible ? (placeholder ?? "Enter your password") : "****************") : (placeholder ?? type)}
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                    />
                ) : (
                    <input
                        className="form-input-text"
                        type={hidden ? (visible ? "text" : "password") : type}
                        id={labelId}
                        name={labelId}
                        placeholder={hidden ? (visible ? (placeholder ?? "Enter your password") : "****************") : (placeholder ?? type)}
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

                {hidden && !editableAction &&
                    <img
                        className="form-input-img-eye"
                        src={visible ? "/svg/opened_eye.svg" : "/svg/closed_eye.svg"}
                        onClick={() => visible ? setVisible(false) : setVisible(true)}
                        alt="eye"
                    />
                }
            </div>
            {subLink && <DirectLink href={subLink.href} text={subLink.text}/>}
        </div>
    );
}
