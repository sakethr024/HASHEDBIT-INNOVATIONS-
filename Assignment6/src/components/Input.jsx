export function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
