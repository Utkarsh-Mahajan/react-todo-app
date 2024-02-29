import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import "./AddTodo.css";
import ResponsiveTextArea from "../ResponsiveTextArea/ResponsiveTextArea";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import validateForm from "../../functions/validateForm";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm(content)) {
      dispatch(addTodo(content));
      setContent("");
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="addtodo">
      <form className="addform" onSubmit={handleSubmit}>
        <ResponsiveTextArea
          placeholder="Add a new todo...."
          content={content}
          setContent={setContent}
        ></ResponsiveTextArea>
         <ErrorMessage isError={isError}></ErrorMessage>
        <button type="submit">Add todo</button>
       
      </form>
    </div>
  );
};

export default AddTodo;
