import "./TodoListItem.css";

export function TodoListItem({ item, onDelete, toggleTodo }) {
  function setPriority(priority) {
    if (priority === "1") {
      return "High";
    }
    if (priority === "2") {
      return "Medium";
    }
    if (priority === "3") {
      return "Low";
    }
  }
  function setColorByPriority(priority){
    if (priority === "1") {
      return "red";
    }
    if (priority === "2") {
      return "yellow";
    }
    if (priority === "3") {
      return "green";
    }
  }

  return (
    <div className={`Todo-Item ${setColorByPriority(item.priority)}`} key={item.id}>
      <div className="Todo-Item-info">
        <label>
          <input
            type="checkbox"
            checked={item.completed}
            className="checkbox"
            onChange={(e) => toggleTodo(item.id, e.target.checked)}
          />
          {item.title}
        </label>
        <p className="priority">Priority : {setPriority(item.priority)}</p>
      </div>
      <button className="deleteItem" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
