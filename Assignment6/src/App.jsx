import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
