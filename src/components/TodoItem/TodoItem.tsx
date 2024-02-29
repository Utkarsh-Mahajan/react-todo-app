import { useDispatch } from "react-redux";
import {
    deleteTodo,
    editTodo,
    toggleCompleted,
} from "../../features/todo/todoSlice";
import { useEffect, useRef, useState } from "react";
import "./TodoItem.css";
import ResponsiveTextArea from "../ResponsiveTextArea/ResponsiveTextArea";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import validateForm from "../../functions/validateForm";

const TodoItem = ({ todo }: { todo: Todo }) => {
    const dispatch = useDispatch();
    const [content, setConent] = useState(todo.content);
    const textInputRef = useRef<HTMLTextAreaElement>(null);
    const uncheckedBtnRef = useRef<HTMLButtonElement>(null);
    const checkedBtnRef = useRef<HTMLButtonElement>(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.style.textDecoration = todo.completed
                ? "line-through"
                : "none";
        }
        if (uncheckedBtnRef.current && checkedBtnRef.current) {
            uncheckedBtnRef.current.style.display = todo.completed
                ? "none"
                : "inline-block";
            checkedBtnRef.current.style.display = todo.completed
                ? "inline-block"
                : "none";
        }
    });
    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const handleEditTodo = () => {
        if (validateForm(content)) {
            dispatch(editTodo({ ...todo, content }));
            setIsError(false);
        } else {
            setConent(todo.content);
            setIsError(true);
        }
    };
    const handleToggleCompleted = () => {
        dispatch(toggleCompleted(todo.id));
    };

    return (
        <>
            <li className="todoitem">
            <div className="todocontainer">
                <span
                    className="textcontainer"
                    onBlur={handleEditTodo}
                    ref={textInputRef}
                >
                    <ResponsiveTextArea
                        placeholder="todo content"
                        content={content}
                        setContent={setConent}
                    ></ResponsiveTextArea>
                </span>
                <span className = "btncontainer">
                <button ref={uncheckedBtnRef} onClick={handleToggleCompleted}>
                    <i className="bi bi-check-square"></i>
                </button>
                <button ref={checkedBtnRef} onClick={handleToggleCompleted}>
                    <i className="bi bi-check-square-fill"></i>
                </button>
                
                <button
                    className="deleteBtn"
                    onClick={() => {
                        handleDeleteTodo(todo.id);
                    }}
                >
                    <i className="bi bi-trash-fill"></i>
                </button>
                </span>
                </div>
                <ErrorMessage isError={isError}></ErrorMessage>
            </li>
            
        </>
    );
};

export default TodoItem;
