import { useState } from 'react';

import Todo from './components/Todo';

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

  return (
    <div className="app"> 
    
      <h1> Lista de Tarefas </h1>
      <div className="todo-list">
        {todos.map((todo) => (
          
          <Todo todo={todo} />
        ))}

      </div>
    
    </div>
  )
}

export default App
