import { validateHeaderValue } from "http";
import { useSelector } from "react-redux";
import { UserState, UserStateValue } from "../store";
import { Todo, TodoProps } from "./todo";

export const TodoHolder = () => {
  const todos: TodoProps[] = useSelector((state: any) => {
    return state.todosSlice.value.todos;
  });

  return (
    <div className="content">
      {todos.map((value, index) => {
        return (
          <Todo
            id={value.id}
            key={value.id}
            completed={value.completed}
            label={value.label}
          ></Todo>
        );
      })}
    </div>
  );
};
