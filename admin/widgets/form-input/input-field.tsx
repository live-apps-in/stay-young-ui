import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  name: string;
  label?: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  errors?: FieldError;
  className?: string;
  [x: string]: any;
}

const InputField = ({
  name,
  label,
  register,
  registerOptions,
  error,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, registerOptions)}
        {...props}
        className={`${className ? className : "form-input"}`}
      />
      <span className="form-error-text mt-1">{error?.message}</span>
    </div>
  );
};

export default InputField;
