import React, { useState } from 'react'
import Todoform from './Todoform';


const Todolist = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        const newTodos=[...todos, todo];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        setTodos(() => todos.filter((item, i) => i !== index))
    }

    return (
        <div>
            <h1>What's the plan</h1>
            <div className="todos">
                <ul>
                    {todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                {todo}
                                &nbsp;
                                &nbsp;
                                <span
                                    style={{ color: 'red' }}
                                    onClick={() => removeTodo(todo)}
                                >&times;</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Todoform onSubmit={addTodo}/>
        </div>
    )
  }


export default Todolist
