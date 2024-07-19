import { useState } from 'react'
import React from 'react'
import { memo } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "wash clothes",
    description: "wash clothes today"
  },{
    id: 3,
    title: "eat food",
    description: "eat your lunch today"
  }]);

  function addTodo(){
    setTodos([...todos,{
      id: 4,
      title: Math.random(),
      description: Math.random()
    }])
    const newTodos = [];
    for(let i=0;i<todos.length;i++){
      newTodos.push(todos[i]);
    }
    //newTodos = todos
    newTodos.push({
      id: counter++,
      title: Math.random(),
      description: Math.random()
    })
    //existing ones + 1
    setTodos(newTodos)
  }

  return (
    <>
    <button onClick={addTodo}>Add a Todo</button> 
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

const Todo =React.memo(function Todo({title, description}){
  return(
    <div> 
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
});

export default App
