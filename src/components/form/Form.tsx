import {FormField, FormFieldProperties} from "./FormField";
import React from "react";
import {ImagePicker, ImagePickerProperties} from "./ImagePicker";
import {ButtonType} from "../../enums/ButtonTypes";
import {Button, ButtonProperties} from "../basics/Button";
import {FormValidator, FormValidatorProperties} from "./FormValidator";

interface FormProperties {
    fields: Array<FormFieldProperties>
    error: string | undefined
    submitButton: ButtonProperties
    alternateButton?: ButtonProperties
    validators?: Array<FormValidatorProperties>
    imagePicker?: ImagePickerProperties
}

export const Form = ({
                         fields,
                         error,
                         submitButton,
                         alternateButton,
                         imagePicker,
                         validators
                     }: FormProperties) => (
    <form className="form">
        {imagePicker && (
            <ImagePicker defaultPicturePath={imagePicker.defaultPicturePath} fileSelector={imagePicker.fileSelector}
                         oldPicturePath={imagePicker.oldPicturePath} selectedPicture={imagePicker.selectedPicture}
                         submitAction={imagePicker.submitAction}/>
        )}
        <div className="form-fields">
            <div className="form-fields-line">
                {fields.filter((field) => field.line).map((field, index) => (
                        <FormField
                            key={index}
                            type={field.type}
                            label={field.label}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                            editableAction={field.editableAction}
                            required={field.required}
                            subLink={field.subLink}
                        />
                    )
                )}
            </div>
            {fields.filter((field) => !field.line).map((field, index) => (
                    <FormField
                        key={index}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        editableAction={field.editableAction}
                        required={field.required}
                        subLink={field.subLink}
                    />
                )
            )}
        </div>
        <div className="form-error">
            {error && error.length > 0 && <p>{error}</p>}
        </div>
        {validators?.map((validator, index) =>
            <FormValidator key={index} fieldName={validator.fieldName} fieldValue={validator.fieldValue}
                           limitChar={validator.limitChar} containsLowerCase={validator.containsLowerCase}
                           containsUpperCase={validator.containsUpperCase}
                           containsSpecialChar={validator.containsSpecialChar}/>
        )}
        <div className="form-validate">
            {alternateButton && (
                <Button type={ButtonType.ALTERNATE} label={alternateButton.label}
                        action={alternateButton.action}/>)}
            <Button type={ButtonType.SUBMIT} label={submitButton.label} action={submitButton.action}/>
        </div>
    </form>
)

