import {
  ADD_TODO,
  MOVE_TO_COMPLETED,
  MOVE_TO_INPROGRESS,
  REMOVE_TODO
} from "./Action.types";

//TODO
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      let todo = [...state.todo, action.payload];
      return { ...state, todo };
    case REMOVE_TODO:
      let removetodo = state.Completed.filter(
        (value) => value.id !== action.payload
      );
      return { ...state, Completed: removetodo };
    case MOVE_TO_INPROGRESS:
      let filterMovetoInprogress = state.todo.filter(
        (value) => value.id === action.payload
      );
      let deleteTodo = state.todo.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        todo: deleteTodo,
        Inprogress: [...state.Inprogress, ...filterMovetoInprogress]
      };
    case MOVE_TO_COMPLETED:
      let filterMovetocompleted = state.Inprogress.filter(
        (value) => value.id === action.payload
      );
      let deleteTodoInprogress = state.Inprogress.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        Inprogress: deleteTodoInprogress,
        Completed: [...state.Completed, ...filterMovetocompleted]
      };
    default:
      return state;
  }
};
