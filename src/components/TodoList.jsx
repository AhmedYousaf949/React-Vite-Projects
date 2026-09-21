import TodoItem from "./TodoItem";
function TodoList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        No tasks yet.
      </p>
    );
  }
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
        />
      ))}

    </ul>
  );
}
export default TodoList;