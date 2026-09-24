function TodoItem({ task, onToggle, onDelete, onEdit, editingId, editTitle, setEditTitle, editDescription, setEditDescription }) {
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
      {task.id === editingId && (
      <div className="edit-form">
        <input  
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <button>Save</button>
        <button>Cancel</button>
      </div>
)}
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
      <button
        className="edit-button"
        onClick={() => onEdit(task.id)}
      >
        Edit
      </button>
    </li>
  );
}
export default TodoItem;