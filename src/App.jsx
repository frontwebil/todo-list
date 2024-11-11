import { useEffect, useState } from "react";
import "./index.css";
import { AddTodoForm } from "./AddTodoForm/AddTodoForm.jsx";
import { TodoListItems } from "./TodoListItems/TodoListItems.jsx";

export function App() {
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

  const [isAscending, setIsAscending] = useState(() => {
    const Ascending = localStorage.getItem("ISASCENDING");
    if (Ascending == null || Ascending == "undefinded") {
      return false;
    }
    if(Ascending == true){
      sortByPriority()
    }
    return JSON.parse(Ascending);
  });

  useEffect(() => {
    localStorage.setItem("ISASCENDING", JSON.stringify(isAscending));
  }, [isAscending]);

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
    setIsAscending((prev) => !prev);

    setTodos((oldTodos) => {
      return [...oldTodos].sort((a, b) => {
        if (isAscending) {
          return a.priority - b.priority;
        } else {
          return b.priority - a.priority;
        }
      });
    });
  }

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
      <TodoListItems
        sortByPriority={sortByPriority}
        isAscending={isAscending}
        todoItems={todos}
        deleteItem={deleteTodoIem}
        toggleTodo={toggleTodo}
      />
    </>
  );
}
