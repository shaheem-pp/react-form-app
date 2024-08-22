interface InputFieldProps {
    inputType: string;
    label: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    id: string;
    className?: string;
}

function InputField({
                        inputType,
                        label,
                        value,
                        placeholder,
                        disabled,
                        id,
                        className,
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
            />
        </div>
    )
}

export default InputField;