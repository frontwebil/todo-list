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

  const [sortedArray , setSortedArray] = useState(todos)


  function addTodo(newItem) {
    const newItemWithId = { ...newItem, id: crypto.randomUUID() };
    setSortedArray((oldTodos)=>{
      return [...oldTodos , newItemWithId]
    })
    setTodos((oldTodos) => {
      return [...oldTodos, newItemWithId];
    });
  }

  function deleteTodoIem(id) {
    setSortedArray((el)=>{
      return el.filter((todo) => todo.id !== id);
    })
    setTodos((el) => {
      return el.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setSortedArray((oldTodos=>{
      return oldTodos.map((el) => {
        if (el.id === id) {
          return { ...el, completed };
        } else {
          return el;
        }
      });
    }))
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
    setSortedArray((oldTodos)=>{
      return [...oldTodos].sort((a,b)=>{
        return b.priority - a.priority;
      })
    })
  }
  function SortPriorityAscending() {
    setSortedArray((oldTodos)=>{
      return [...oldTodos].sort((a,b)=>{
        return a.priority - b.priority;
      })
    })
  }
  function SetPriorityDefault(){
    setSortedArray(todos);
  }

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
      <TodoListItems
        sortByPriorityDescending={SortPriorityDescending}
        sortByPriorityAscending={SortPriorityAscending}
        setDefault={SetPriorityDefault}
        todoItems={sortedArray}
        deleteItem={deleteTodoIem}
        toggleTodo={toggleTodo}
      />
    </>
  );
}
