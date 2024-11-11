import "./TodoListItems.css";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import {SortItems} from '../SortItems/SortItems'

export function TodoListItems({ todoItems, deleteItem , toggleTodo , sortByPriorityDescending , sortByPriorityAscending , setDefault }) {
  return (
    <>
      <h1>Todo List</h1>
      <SortItems sortByPriorityDescending={sortByPriorityDescending} sortByPriorityAscending={sortByPriorityAscending} setDefault={setDefault}/>
      <div className="todoItems-column">
        {todoItems.length === 0 && "No todos"}
        {todoItems.map((el) => {
          return (
            <TodoListItem key={el.id} onDelete={deleteItem} toggleTodo={toggleTodo}  item={el} />
          );
        })}
      </div>
    </>
  );
}
  