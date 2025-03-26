import { useState } from 'react';
import Todo from "./components/Todo";
import Todoform from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';


import "./App.css";



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

const [search, setSearch] = useState("");

const addTodo= (text, category) => {
  const newtodos = [
    ...todos, 
    {id: Math.floor(Math.random() * 10000),
    text,
    category,
    isCompleted: false,
  },
];
setTodos(newtodos);
};

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter 
  ((todo) => todo.id !==id ? todo:null);

  setTodos (filteredTodos);
};

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
);
setTodos(newTodos);
};

  return( 
  <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter/>
  <div className='todo-list'>

    {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .map((todo) =>(
      <Todo key={todo.id} todo={todo}  removeTodo={removeTodo} completeTodo={completeTodo}/>
    ))}

  </div>
  <Todoform addTodo={addTodo}/>
  </div>
);
  

  
}

export default App
