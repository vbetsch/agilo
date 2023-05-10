import {ButtonType} from "../../enums/ButtonTypes";

export interface ButtonProperties {
    label: string
    action: () => Promise<void>
    type?: ButtonType
}

export const Button = ({label, action, type}: ButtonProperties) => (
    <button
        className={type ? `button ${type}-button` : ButtonType.SUBMIT}
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
