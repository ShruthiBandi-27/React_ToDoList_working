import { useContext, useRef } from "react";
import { Input, InputGroup, Button } from "reactstrap";
import { TodoContext } from "./Context/TodoContext";
import { v4 } from "uuid";
import { ADD_TODO } from "./Context/Action.types";
export default function AddTodo() {
  const inputRef = useRef("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: v4(),
        todo: inputRef.current.value
      }
    });
    inputRef.current.value = "";
  };
  return (
    <InputGroup
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <input type="text" ref={inputRef} name="todoText" />
      <Button onClick={handleSubmit}>Add Todo</Button>
    </InputGroup>
  );
}
