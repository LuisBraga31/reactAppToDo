import { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import "./App.css";


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Subir alterações no GitHub",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Correr no Parque",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];

    setTodos(newTodos);

  }

  const removeToDo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  }

  return (
    <div className="app"> 
    
      <h1> Lista de Tarefas </h1>
      <div className="todo-list">
        {todos.map((todo) => (
          
          <Todo key={todo.id} todo={todo} removeToDo={removeToDo} />
        ))}

      </div>

      <TodoForm addTodo={addTodo}/>
    
    </div>
  )
}

export default App
