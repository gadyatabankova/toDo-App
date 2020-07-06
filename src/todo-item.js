import React from 'react';

//функциональный компонент
const TodoItem = (props) => {
  console.log(props);
  const className = props.checked ? 'checked' : '';

  return (
    <li
      className={className}
      onClick = {props.toggleTodo}
    >
     {props.name}
    </li>
  );
}

export default TodoItem;
