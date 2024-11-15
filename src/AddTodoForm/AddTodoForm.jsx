import { useState } from "react";
import "./AddTodoForm.css";

export function AddTodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState({
    title: "",
    priority: "1",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem.title === "") return;

    onSubmit({...newItem , completed: false});
    setNewItem({
      title: "",
      priority: "1",
    });
  }

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <div className="Row">
        <div className="addTodoForm-input">
          <label htmlFor="enter-todo" className='enter-todo'>Enter Todo</label>
          <input
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            type="text"
            id="enter-todo"
            className="input-text"
          />
        </div>
        <div className="addTodoForm-input">
          <label htmlFor="priority" className='enter-todo'>Priority</label>
          <select
            onChange={(e) =>
              setNewItem({ ...newItem, priority: e.target.value })
            }
            value={newItem.priority}
            name=""
            id="priority"
            className="select"
          >
            <option value="1">high</option>
            <option value="2">medium</option>
            <option value="3">low</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn">Add</button>
    </form>
  );
}
