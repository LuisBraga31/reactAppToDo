import React from 'react'

const Todo = ({ todo, removeToDo }) => {
  return (
    <div className="todo">
            <div className="content">
              <p> {todo.text} </p>
              <p className="category"> ({todo.category}) </p>
            </div>
            <div>
              <button className="complete"> Completar </button>
              <button className="remove" onClick={() => removeToDo(todo.id)}> X </button>
            </div>
    </div>
  )
}

export default Todo