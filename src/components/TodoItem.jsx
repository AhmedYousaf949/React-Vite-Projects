function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <div
        className="task-content"
        onClick={() => onToggle(task.id)}
      >
        <h2>
          {task.title}
        </h2>
        {task.isOpen && (
          <p>
            {task.description}
          </p>
        )}
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