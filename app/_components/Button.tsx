interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`primary-btn cursor-pointer px-6 py-2.5 font-medium tracking-wide shadow-2xl shadow-slate-950 transition-all duration-300 hover:scale-95 md:px-8 ${
        disabled && "cursor-not-allowed opacity-50"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
