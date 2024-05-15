import React from 'react'
import TodoItem from './TodoItem' // Lakukan import

const Todos = (props) => {
    return (
      <div>
        {props.todos.map((todo) => {
        // Berikan datanya ke TodoItem
        return <TodoItem key={todo.id} todo={todo} />
      })}
      </div>
    )
  }
  

export default Todos