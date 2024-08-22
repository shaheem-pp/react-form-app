import {ChangeEvent} from "react";

interface InputFieldProps {
    inputType: string;
    label: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    id: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
                        inputType,
                        label,
                        value,
                        placeholder,
                        disabled,
                        id,
                        className,
                        onChange,
                    }: InputFieldProps) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={inputType}
                className={`form-control ${className}`}
                id={id}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;
