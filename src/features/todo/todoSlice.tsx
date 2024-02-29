import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
    getLocalStorage,
    setLocalStorage,
} from "../../functions/localStorageFunctions";

const initialState: { items: Todo[] } = { items: getLocalStorage()} ;

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                content: action.payload,
                completed: false,
            };
            state.items.push(todo);
            setLocalStorage(state.items);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
            setLocalStorage(state.items);
        },

        editTodo: (state, action) => {
            state.items = state.items.map((todo) => {
                return todo.id === action.payload.id ? action.payload : todo;
            });
            setLocalStorage(state.items);
        },
        toggleCompleted: (state, action) => {
            state.items = state.items.map((todo) => {
                if (todo.id == action.payload) {
                    todo.completed = !todo.completed;
                    return todo;
                } else {
                    return todo;
                }
            });
            setLocalStorage(state.items);
        },
    },
});

export const { addTodo, deleteTodo, editTodo, toggleCompleted } =
    todoSlice.actions;

export default todoSlice.reducer;
