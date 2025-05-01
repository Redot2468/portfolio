interface FormInputProps {
  children: React.ReactNode;
  label: string;
  error: string;
}

function FormInput({ children, label, error }: FormInputProps) {
  const htmlFor = children;
  console.log(htmlFor);
  return (
    <div className="form space-y-3">
      <label htmlFor={label.toLowerCase()} className="cursor-pointer">
        {label}
      </label>
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default FormInput;
