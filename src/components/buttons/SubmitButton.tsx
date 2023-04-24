interface SubmitButtonProperties {
    label: string;
    action: () => Promise<void>;
}

export const SubmitButton = ({label, action}: SubmitButtonProperties) => {
    return (
        <button
            className="button submit-button"
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