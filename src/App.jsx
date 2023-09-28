//print my name
/*import React, { useState } from "react";

function printName(name) {
  console.log(name);
}
printName("tatah leeynyuy")
// using the printName function to print the value of the state
function App () {
  const [name, setName] = useState("name");
  const person={
    name: "tatah",
    age: 7,
    gender: "male",
    colour: "fair" ,
    nationality: "Cameroonian"

  }
  return (
    <div>
      <p>my Name</p>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => printName(name)}>print Name</button>
    </div>
  );
}

export default <App>*/

import React, { useEffect, useState } from "react";
import "./App.css"

let todo = {
  id: Date.now(),
  text: "Take a bath1",
  isCompleted: false,
}

function App() {
  const [todos, setTodos] = useState([todo]);

  const [todoText, setTodoText] = useState("")
            

  function addTodo() {
    setTodos([...todos, {
    id: Date.now(),
    text: todoText,
    isCompleted: false
  }])
    setTodoText("")
  }

  function handleInputChange(event) {
    const value = event.target.value
    setTodoText(value)
  }

  function markAsCompleted(todo) {
    let toBeMarkAsCompleted = todos.find(t => t == todo)
    toBeMarkAsCompleted.isCompleted = true
    setTodos([...todos.filter(t => t != todo), toBeMarkAsCompleted])
  }

  function deleteTodo(todo) {
    let newTodoList = todos.filter(singleTodo => singleTodo != todo)
    setTodos(newTodoList)
  }

  function markTodoAsCompleted(todo) {
    let toBemarkAsInComplete = todos.find(t => t == todo)
    toBemarkAsInComplete.isCompleted = false
    setTodos([...todos.filter(t => t != todo), toBemarkAsInComplete])
  }

  return (
    <div className="center">
      <div>
        <div>
          <h1 className="title">Todo app</h1>
          <div>
            <input onChange={handleInputChange} type="text" value={todoText} />
            <button onClick={addTodo} type="button">add Todo</button>
          </div>
        </div>
        <h1>list of Todos</h1>
        <ul>
          {todos.map((todo, index) =>
          (
            !todo.isCompleted &&
            <div key={index}>
              <li className="todo_text">{index + 1}, {todo.text}</li>
              <button onClick={() => markAsCompleted(todo)} type="button">
                mark as completed
              </button>
              <button onClick={() => deleteTodo(todo)} type="button"> Delete</button>
            </div>
          )
          )}
        </ul>
      </div>
      <div>
        <h2>list of Completed Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <div key={index}>
              {todo.isCompleted?(
                <div>
                  <li className="todo_text">{todo.text}</li>
                  <button onClick={()=>markAsInComplete(todo)} type="button">
                    mark as incomplete
                  </button>
                  <button onClick={()=>deleteTodo(todo)} type="button">Delete</button>
                  </div>
              ) :(
                <></>
              )
              }
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App