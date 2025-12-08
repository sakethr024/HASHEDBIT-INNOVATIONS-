export function Button({ children, onClick, variant = "primary" }) {
  const baseStyle = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} text-red-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
