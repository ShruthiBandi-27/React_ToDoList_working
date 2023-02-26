import "./styles.css";
import { useReducer, useState } from "react";
import Reducer from "./Context/Reducer";
import { TodoContext } from "./Context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

let initialState = {
  todo: [],
  Inprogress: [],
  Completed: []
};
export default function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}
