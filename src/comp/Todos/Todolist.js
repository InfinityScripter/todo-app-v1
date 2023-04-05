import React from 'react';
import Todo from './Todo';
import styles from './Todolist.module.css';

const Todolist = ({todos,doubleClick}) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.map ((todo, index) => (
        <Todo key={index} todo={todo} doubleClick={()=>doubleClick(index)} />
      ))}
    </div>
  );
};

export default Todolist;
