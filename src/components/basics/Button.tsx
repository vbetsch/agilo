import {ButtonType} from "../../enums/ButtonTypes";

export interface ButtonProperties {
    label: string
    action: () => Promise<void>
    type?: ButtonType
}

export const Button = ({label, action, type}: ButtonProperties) => {
    let className: string = ButtonType.SUBMIT

    if (type) {
        className = `button ${type}-button`
    }

    return (
        <button
            className={className}
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                action();
            }}
        >
            <input
                className="button-text"
                type="submit"
                value={label}
            />
        </button>
    )
}