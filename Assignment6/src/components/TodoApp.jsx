import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Card, CardContent } from "./Card";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task].sort());
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 ">
      <div className="flex space-x-2">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <Button onClick={addTask} variant="primary">
          Add
        </Button>
      </div>
      <div className="space-y-2">
        {tasks.map((t, index) => (
          <Card
            key={index}
            className="flex justify-between items-center p-3 border rounded"
          >
            <CardContent className="flex-grow">{t}</CardContent>
            <Button variant="destructive" onClick={() => removeTask(index)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
