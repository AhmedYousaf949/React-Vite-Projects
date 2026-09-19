import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">

        <div className="todo-header">
          <h1>My Todo List</h1>
          <p>
            Manage your tasks, keep track of your work,
            and stay organized.
          </p>
        </div>

        <TodoForm onAdd={addTask} />

        <TodoList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;