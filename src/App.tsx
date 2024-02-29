import AddTodo from './components/AddTodo/AddTodo';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {

  const todoArr = useSelector((state: RootState) => state.todos.items)

  return (
    <div className='container'>
      <NavBar ></NavBar>
      <AddTodo></AddTodo>
      <TodoList todoArr={todoArr} ></TodoList>
      <Footer></Footer>
    </div>
  );
}

export default App;


