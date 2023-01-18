import { useDispatch } from "react-redux";
import { deleteTodo } from "../store";

export interface TodoProps {
  label: string;
  completed?: boolean;
  id: string;
}

export const Todo = (props: TodoProps) => {
  const dispatch = useDispatch();
  const onDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo row" id={props.id}>
      <h1>{props.label}</h1>
      <button className="delete-btn" onClick={() => onDelete(props.id)}>
        delete
      </button>
    </div>
  );
};
