export interface AlternateButtonProperties {
    label: string;
    action: () => Promise<void>;
}

export const AlternateButton = ({label, action}: AlternateButtonProperties) => {
    return (
        <button
            className="button alt-button"
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