export function Card({ children }) {
  return (
    <div className="border border-gray-300 p-4 rounded shadow">{children}</div>
  );
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}
