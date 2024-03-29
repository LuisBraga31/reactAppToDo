import React from 'react'

const Todo = ({ todo, removeToDo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
            <p className="category"> {todo.category} </p>
              <p> {todo.text} </p>

            </div>
            <div>
              <button className="complete" onClick={() => completeTodo(todo.id)}> Completar </button>
              <button className="remove" onClick={() => removeToDo(todo.id)}> X </button>
            </div>
    </div>
  )
}

export default Todo