import React from 'react';
import styles from './Todo.module.css';
import Delete from '../UI/Delete';


const Todo = ({todo,doubleClick,addStatus}) => {

if (!addStatus) {
  return (
    <div onDoubleClick={doubleClick} className={styles.todo + ' ' + 'animate__animated animate__backInUp '}>
      <div className={styles.todoText}>📄 {todo} </div>
      <Delete deletTodo={doubleClick}/>
    </div>

  );
}
};

export default Todo;
