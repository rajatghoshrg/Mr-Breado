const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) => {
  // VARIANTS (color styles)
  const variants = {
    primary:
      "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-105 shadow-md",

    secondary:
      "bg-white text-red-500 border border-red-500 hover:bg-red-50",

    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",

    ghost:
      "text-gray-700 hover:text-red-500",
  };

  // SIZES
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-full font-medium transition duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;