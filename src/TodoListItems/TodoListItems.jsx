import "./TodoListItems.css";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import {SortItems} from '../SortItems/SortItems'

export function TodoListItems({ todoItems, deleteItem , toggleTodo , handleClickChange , sortButton , setSearchItem ,searchItem}) {
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" className="searchItem" value={searchItem} onChange={e=>setSearchItem(e.target.value)} placeholder="Search Item"/>
      <SortItems  handleClickChange={handleClickChange} sortButton={sortButton}/>
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
  