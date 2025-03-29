import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Todo from "./components/Todo";
import Todoform from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';
import axios from 'axios';

import "./App.css";




function App() {

  const [todos,setTodos] = useState([]);

  

async function getTodos(){
  const retorno = await axios.get('http://localhost:3000/tarefas');
  setTodos(retorno.data);
}

//async function deleteTodos(id) {
 // try {
  //  await axios.delete(`http://localhost:3000/deletetarefas/${id}`);
  //  getTodos(); 
  //} catch (error) {
  //  console.error("Erro ao deletar tarefa:", error);
//  }
//}


const [search, setSearch] = useState("");

const [filter, setFilter] = useState("All");
const [sort, setSort] = useState("Asc");

useEffect(() => {
  getTodos();
}, []);

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
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
  <div className='todo-list'>

    {todos
  .filter((todo) => 
  filter=== "All" 
  ? true 
  : filter === "Completed" ?
  todo.isCompleted :  
  !todo.isCompleted)
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
    )

    .sort((a, b) => sort === "Asc" 
    ? a.text.localeCompare(b.text) 
    : b.text.localeCompare(a.text) )
    
    .map((todo) =>(
      <Todo key={todo.id} todo={todo}  removeTodo={removeTodo} completeTodo={completeTodo}/>
    ))}

  </div>
  <Todoform addTodo={addTodo}/>
  </div>
);
  

  
}

export default App
