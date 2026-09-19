function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="todo-item">

      <div
        className="task-content"
        onClick={() => onToggle(task.id)}
      >
        <h2 className={task.completed ? "completed" : ""}>
          {task.title}
        </h2>

        <p className={task.completed ? "completed" : ""}>
          {task.description}
        </p>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;