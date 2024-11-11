import "./TodoListItem.css";

export function TodoListItem({ item, onDelete , toggleTodo }) {
  return (
    <div className="Todo-Item" key={item.id}>
      <label>
        <input type="checkbox" checked={item.completed} className="checkbox" onChange={(e)=>toggleTodo(item.id , e.target.checked)}/>
        {item.title}
      </label>
      <p className="priority">Priority : {item.priority}</p>
      <button className="deleteItem" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
