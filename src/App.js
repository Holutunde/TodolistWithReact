import React, { useState } from 'react'
import './App.css'
import Header from './component/components/Header'
import Todoform from './component/components/Todoform'
import Todolist from './component/components/Todolist'

export default function App() {
  //const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState('')

  const [todos, setTodos] = useState([])

  const [edit, setEdit] = useState(null)
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Todoform
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  )
}
