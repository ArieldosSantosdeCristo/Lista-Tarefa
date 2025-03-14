import { useState } from 'react';
import Todo from "./components/Todo";
import "./App.css";
import Todoform from './components/Todoform';


function App() {
const [todos,setTodos] = useState([
  {
    id: 1,
    text: "Criar funcionalidades para o sistema",
    category:"Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Treinar",
    category:"Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Ir a faculdade",
    category:"Estudo",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Exame medico",
    category:"Pessoal",
    isCompleted: false,
  },
]);

const addTodo= (text, category) => {
  const newtodos = [
    ...todos, 
    {id: Math.floor(Math.random() * 10000),
    text,
    category,
    isCompleted: false,
  },
];
setTodos(newtodos)
}

  return( 
  <div className="app">
      <h1>Lista de Tarefas</h1>
  <div className='todo-list'>

    {todos.map((todo) =>(
      <Todo key={todo.id} todo={todo} />
    ))}

  </div>
  <Todoform addTodo={addTodo}/>
  </div>
);
  

  
}

export default App
