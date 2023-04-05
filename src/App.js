import React from 'react';
import './App.css';
import TodoForm from './comp/Todos/TodoForm'
import Todolist from './comp/Todos/Todolist';
import 'animate.css'



function App() {

  const [todos, setTodos] = React.useState ([]);
  const [isAdd, setIsAdd] = React.useState (false);


  const addTodoHandler = (text) => {
    const newTodos = [...todos,text ];
    setTodos (newTodos);
  }


  const doubleClickHandler = (index) => {
    const updateTodos = todos.filter((todo,i) => i !== index);
    setTodos(updateTodos);
    setIsAdd(!isAdd)
  }

  return (
    <div className="App">
      <h1 className='animate__animated animate__flipInY animate__delay-1s'>TODO APP</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length && <p>todo is empty</p>}
      <Todolist todos={todos} doubleClick={doubleClickHandler} addStatus={isAdd}/>
    </div>

  );
}

export default App;
