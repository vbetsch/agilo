import React from "react";
import {FileContent} from "use-file-picker";

export interface ImagePickerProperties {
    fileSelector: () => void
    defaultPicturePath: string
    oldPicturePath?: string
    selectedPicture: FileContent
    submitAction: () => Promise<void>
}

export function ImagePicker({
                                oldPicturePath,
                                selectedPicture,
                                defaultPicturePath,
                                fileSelector,
                                submitAction
                            }: ImagePickerProperties) {
    const pickImage = () => {
        try {
            fileSelector && fileSelector();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="form-head-content">
            <img
                className="form-head-picture"
                src={selectedPicture?.content ?? oldPicturePath ?? defaultPicturePath}
                alt="Profile picture"
                onClick={pickImage}
            />
            {!selectedPicture || oldPicturePath === selectedPicture.content ? (
                <img
                    className="form-head-icon"
                    src="/svg/edit.svg"
                    alt="edit"
                    onClick={pickImage}
                />
            ) : (
                <img
                    className="form-head-icon"
                    src="/svg/save.svg"
                    alt="save"
                    onClick={submitAction}
                />
            )}
        </div>
    )
}