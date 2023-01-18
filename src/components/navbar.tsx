import { TodoCreator } from "./todoCreator";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clear } from "../store";

export const Navbar = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(
      addTodo({
        label: newTodo,
        id: "0",
        completed: false,
      })
    );

    setNewTodo("");
  };

  const onReset = () => {
    dispatch(clear());
  };

  return (
    <nav>
      <div className="nav-row">
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          type="text"
          placeholder="Add new todo"
          onKeyUp={(e) => (e.key == "Enter" ? onAdd() : null)}
        />
        <button className="add-btn" onClick={onAdd}>
          add
        </button>
        <button className="reset-btn" onClick={onReset}>
          reset
        </button>
      </div>
    </nav>
  );
};
