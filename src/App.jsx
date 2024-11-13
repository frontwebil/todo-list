import { useEffect, useState } from "react";
import "./index.css";
import { AddTodoForm } from "./AddTodoForm/AddTodoForm.jsx";
import { TodoListItems } from "./TodoListItems/TodoListItems.jsx";

export function App() {
  const searchInTodos = (searchText, listOfTodos) => {
    if (!searchText) {
      setsortButton("default");
      return listOfTodos;
    }
    return listOfTodos.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

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

  const [sortedArray, setSortedArray] = useState(todos);

  const [sortButton, setsortButton] = useState("default");

  const [searchItem, setsearchItem] = useState("");

  useEffect(() => {
    const filteredTodos = searchInTodos(searchItem, todos); // Используем todos вместо sortedArray
    setSortedArray(filteredTodos);
  }, [searchItem, todos]);

  function addTodo(newItem) {
    const newItemWithId = { ...newItem, id: crypto.randomUUID() };
    setSortedArray((oldTodos) => {
      return [...oldTodos, newItemWithId];
    });
    setTodos((oldTodos) => {
      return [...oldTodos, newItemWithId];
    });

    setsortButton("default");
    setSortedArray(todos);
  }

  function deleteTodoIem(id) {
    setSortedArray((el) => {
      return el.filter((todo) => todo.id !== id);
    });
    setTodos((el) => {
      return el.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setSortedArray((oldTodos) => {
      return oldTodos.map((el) => {
        if (el.id === id) {
          return { ...el, completed };
        } else {
          return el;
        }
      });
    });
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

  function SortPriorityDescending() {
    setSortedArray((oldTodos) => {
      return [...oldTodos].sort((a, b) => {
        return b.priority - a.priority;
      });
    });
  }
  function SortPriorityAscending() {
    setSortedArray((oldTodos) => {
      return [...oldTodos].sort((a, b) => {
        return a.priority - b.priority;
      });
    });
  }
  function SetPriorityDefault() {
    setSortedArray(todos);
  }

  function handleClickChange() {
    if (sortButton === "ascending") {
      setsortButton("descending");
      SortPriorityDescending();
    } else if (sortButton === "descending") {
      setsortButton("default");
      SetPriorityDefault();
    } else if (sortButton === "default") {
      setsortButton("ascending");
      SortPriorityAscending();
    }
  }

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
      <TodoListItems
        setSearchItem={setsearchItem}
        searchItem={searchItem}
        handleClickChange={handleClickChange}
        sortButton={sortButton}
        todoItems={sortedArray}
        deleteItem={deleteTodoIem}
        toggleTodo={toggleTodo}
      />
    </>
  );
}
