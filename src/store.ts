import { configureStore, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { useStore } from "react-redux";
import { TodoProps } from "./components/todo";


export interface UserStateValue {
    todos: TodoProps[]
}

export interface UserState {
    value: UserStateValue,
}

const initialState: UserState = {
    value: {
        todos: [
            {
                label: "first todo",
                id: '1',
                completed: false,
            }
        ] as TodoProps[],
    },
} 

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state: UserState, action: PayloadAction<TodoProps>) => {
            const newTodo: TodoProps = {
                label: action.payload.label,
                id:  (state.value.todos.length + 1).toString(),
                completed: false
            };
            const newTodos = state.value.todos;
            newTodos.push(newTodo);
        },

        deleteTodo: (state: UserState, action: PayloadAction<string>) => {
            console.log(action.payload);
            const newTodos = state.value.todos = state.value.todos.filter((value) => {
                return value.id !== action.payload;
            });
        },

        clear: (state: UserState) => {
            const newTodos = state.value.todos = [];
        },
    }
});

export const store = configureStore({
    reducer: {
        todosSlice: todosSlice.reducer,
    }
})

export const {addTodo, clear, deleteTodo} = todosSlice.actions;