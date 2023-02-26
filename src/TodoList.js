import { useContext } from "react";
import { Container, Alert, Button } from "reactstrap";
import {
  MOVE_TO_COMPLETED,
  MOVE_TO_INPROGRESS,
  REMOVE_TODO
} from "./Context/Action.types";
import { TodoContext } from "./Context/TodoContext";
export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const { todo, Inprogress, Completed } = state;
  return (
    <Container>
      {todo.map((value) => {
        return (
          <Alert color="primary">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="primary"
                outline
                onClick={() =>
                  dispatch({ type: MOVE_TO_INPROGRESS, payload: value.id })
                }
              >
                Move To Inprogress
              </Button>
            </div>
          </Alert>
        );
      })}
      {Inprogress.map((value) => {
        return (
          <Alert color="warning">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="warning"
                outline
                onClick={() =>
                  dispatch({ type: MOVE_TO_COMPLETED, payload: value.id })
                }
              >
                Move To Completed
              </Button>
            </div>
          </Alert>
        );
      })}
      {Completed.map((value) => {
        return (
          <Alert color="success">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {value.todo}
              <Button
                color="success"
                outline
                onClick={() =>
                  dispatch({ type: REMOVE_TODO, payload: value.id })
                }
              >
                DELETE
              </Button>
            </div>
          </Alert>
        );
      })}
    </Container>
  );
}
