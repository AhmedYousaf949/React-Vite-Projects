import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, description) => {
    const newTask = {
      id: Math.random(),
      title: title,
      description: description,
      isOpen: false,
    };
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isOpen: !task.isOpen,
          };
        }
        return task;
      })
    );
  };
  return (
    <div className="app">
      <div className="todo-container">
        <div className="todo-header">
          <h1>My Todo List</h1>
        </div>
        <TodoForm onAdd={addTask} />
        <TodoList
          tasks={tasks}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
}
export default App;