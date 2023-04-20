interface FormButtonProperties {
    id: string
    value: string
}

export function FormButton({ id, value }: FormButtonProperties) {
    return (
        <div className="form-validate">
            <button className="button">
                <input className="button-text" type="submit" id={id} value={value} />
            </button>
        </div>
    )
}