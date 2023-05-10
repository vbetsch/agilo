import React from "react";
import {FileContent} from "use-file-picker";

export interface ImagePickerProperties {
    fileSelector: () => void
    defaultPicturePath: string
    oldPicturePath?: string
    selectedPicture: FileContent
    submitAction: () => Promise<void>
}

export const ImagePicker = ({
                                oldPicturePath,
                                selectedPicture,
                                defaultPicturePath,
                                fileSelector,
                                submitAction
                            }: ImagePickerProperties) => (
    <div className="form-head-content">
        <img
            className="form-head-picture"
            src={selectedPicture?.content ?? oldPicturePath ?? defaultPicturePath}
            alt="Profile picture"
            onClick={() => {
                try {
                    fileSelector && fileSelector();
                } catch (err) {
                    console.log(err);
                }
            }}
        />
        {!selectedPicture || oldPicturePath === selectedPicture.content ? (
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