import {useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const newTasks = data.map((task) => {
  return {
    id: task.id,
    title: task.title,
    description: "This task came from the API.",
    isOpen: false,
  };
});

setTasks(newTasks);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
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
  const deleteTask = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        setTasks(
          tasks.filter((task) => task.id !== id)
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const editTask = (id) => {
  const taskToEdit = tasks.find((task) => task.id === id);
  if (!taskToEdit) {
    return;
  }
  setEditingId(id);
  setEditTitle(taskToEdit.title);
  setEditDescription(taskToEdit.description);
};
const cancelEdit = () => {
  setEditingId(null);
  setEditTitle("");
  setEditDescription("");
};
const saveEdit = () => {
  console.log("Saving:", editingId);
  console.log("New title:", editTitle);
  console.log("New description:", editDescription);
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
          onDelete={deleteTask}
          onEdit={editTask}
          editingId={editingId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editDescription={editDescription}
          setEditDescription={setEditDescription}
          onCancelEdit={cancelEdit}
          onSaveEdit={saveEdit}
        />
      </div>
    </div>
  );
}
export default App;