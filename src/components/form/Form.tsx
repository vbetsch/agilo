import {FormField, FormFieldProperties} from "./FormField";
import {SubmitButton} from "../buttons/SubmitButton";
import {AlternateButton} from "../buttons/AlternateButton";
import React from "react";
import {FileContent} from "use-file-picker";

interface FormProperties {
    fields: Array<FormFieldProperties>
    error: string | undefined
    submitLabel: string
    submitAction: () => Promise<void>
    altBtnLabel?: string
    altBtnAction?: () => Promise<void>
    picture?: boolean
    oldPicture?: string
    selectedFile?: FileContent
    defaultPicture?: string
    fileSelector?: () => void
    pictureAction?: () => Promise<void>
}

export function Form({
                         submitLabel,
                         fields,
                         error,
                         submitAction,
                         altBtnLabel,
                         altBtnAction,
                         picture,
                         oldPicture,
                         selectedFile,
                         defaultPicture,
                         fileSelector,
                         pictureAction
                     }: FormProperties) {
    return (
        <form className="form">
            {picture && (
                <div className="form-head-content">
                    <img
                        className="form-head-picture"
                        src={selectedFile?.content ?? oldPicture ?? defaultPicture}
                        alt="Profile picture"
                        onClick={() => {
                            try {
                                fileSelector && fileSelector();
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    />
                    {!selectedFile || oldPicture === selectedFile.content ? (
                        <img
                            className="form-head-icon"
                            src="/svg/edit.svg"
                            alt="edit"
                        />
                    ) : (
                        <img
                            className="form-head-icon"
                            src="/svg/save.svg"
                            alt="save"
                            onClick={pictureAction}
                        />
                    )}
                </div>
            )}
            <div className="form-fields">
                {fields.map((field, index) => (
                    <FormField
                        key={index}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        editable={field.editable}
                        editableAction={field.editableAction}
                        required={field.required}
                    />
                ))}
            </div>
            <div className="form-error">
                {error && error.length > 0 && <p>{error}</p>}
            </div>
            <div className="form-validate">
                {altBtnLabel && altBtnAction && (<AlternateButton label={altBtnLabel} action={altBtnAction}/>)}
                <SubmitButton label={submitLabel} action={submitAction}/>
            </div>
        </form>
    );
}
