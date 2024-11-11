import { useEffect, useState } from "react";
import "./index.css";
import { AddTodoForm } from "./AddTodoForm/AddTodoForm.jsx";
import { TodoListItems } from "./TodoListItems/TodoListItems.jsx";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [
        {
          title: "Clean Home",
          priority: "1",
          id: crypto.randomUUID(),
          completed: true,
        },
      ];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    
  }, [todos]);


  function addTodo(newItem) {
    const newItemWithId = { ...newItem, id: crypto.randomUUID() };
    setTodos((oldTodos) => {
      return [...oldTodos, newItemWithId];
    });
  }

  function deleteTodoIem(id) {
    setTodos((el) => {
      return el.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setTodos((oldTodos) => {
      return oldTodos.map((el) => {
        if (el.id === id) {
          return { ...el, completed };
        } else {
          return el;
        }
      });
    });
  }

  function sortByPriority() {
    setTodos((oldTodos) => {
      return [...oldTodos].sort((a, b) => b.priority - a.priority);
    });
  }

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
      <TodoListItems
        sortByPriority={sortByPriority}
        todoItems={todos}
        deleteItem={deleteTodoIem}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
