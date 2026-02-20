const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyle =
    "px-5 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
