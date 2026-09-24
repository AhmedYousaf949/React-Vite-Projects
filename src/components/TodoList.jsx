import TodoItem from "./TodoItem";
function TodoList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  onCancelEdit,
  onSaveEdit,
}) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet.</p>;
  }
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          editingId={editingId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editDescription={editDescription}
          setEditDescription={setEditDescription}
          onCancelEdit={onCancelEdit}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
}
export default TodoList;
