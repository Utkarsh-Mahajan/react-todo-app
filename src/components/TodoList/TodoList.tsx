import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
const TodoList = ({ todoArr }: { todoArr: Todo[] }) => {
  return (
    <div className="todolist">
      {todoArr.length == 0 && <em className="message">No Added Tasks 😊</em>}
      {todoArr.length !== 0 && (
        <>
          <h2>Todo List</h2>
          <ul>
            {todoArr.map((todo) => (
              <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;
