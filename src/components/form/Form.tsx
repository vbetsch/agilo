// import {useForm} from "react-hook-form";
import { FormField, FormFieldProperties } from "./FormField";

interface FormProperties {
    label: string;
    fields: Array<FormFieldProperties>;
    error: string | undefined;
    action: () => Promise<void>;
}

export function Form({ label, fields, error, action }: FormProperties) {
    return (
        <form className="form">
            <div className="form-fields">
                {fields.map((field, index) => (
                    <FormField
                        key={index}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        required={field.required}
                    />
                ))}
            </div>
            <div className="form-error">
                {error && error.length > 0 && <p>{error}</p>}
            </div>
            <div className="form-validate">
                <button 
                    className="button"
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
            </div>
        </form>
    );
}
