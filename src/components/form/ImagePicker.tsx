import React from "react";
import {FileContent} from "use-file-picker";

export interface ImagePickerProperties {
    fileSelector: () => void
    defaultPicture: string
    oldPicture?: string
    selectedPicture: FileContent
    submitAction: () => Promise<void>
}

export const ImagePicker = ({
                                oldPicture,
                                selectedPicture,
                                defaultPicture,
                                fileSelector,
                                submitAction
                            }: ImagePickerProperties) => {
    return (
        <div className="form-head-content">
            <img
                className="form-head-picture"
                src={selectedPicture?.content ?? oldPicture ?? defaultPicture}
                alt="Profile picture"
                onClick={() => {
                    try {
                        fileSelector && fileSelector();
                    } catch (err) {
                        console.log(err);
                    }
                }}
            />
            {!selectedPicture || oldPicture === selectedPicture.content ? (
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
                    onClick={submitAction}
                />
            )}
        </div>
    )
}