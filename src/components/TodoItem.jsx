function TodoItem({ task, onToggle }) {
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
    </li>
  );
}
export default TodoItem;