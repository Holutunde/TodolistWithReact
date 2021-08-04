import React, { useState } from 'react'
import Header from './Header';
//import Todo from './Todo';
import Todoform from './Todoform';



const Todolist = () => {
     const[todos, setTodos] = useState([])

    const addTodo = todo => {
        
        const newTodos=[...todos,todo];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        setTodos(() => todos.filter((item ,i) => i !== index))
    }

    const updateTodo=(todoId,newValue)=>{
        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)))
    }

     
    const completeTodo=(index)=>{
        let updatedTodo=todos.map((todo)=> {
        if (todo.id === index){
            todo.isComplete = !todo.isComplete
        }
        return todo;
    })
        setTodos(updatedTodo)
    }

    return (
      <div className="container">
          <div className="app-wrapper">
              <div>
                 <Header/>
              </div>
          <Todoform onSubmit={addTodo}/>
          <ul>
                  {todos.map((todo, i) => {
                    return (
                        <div>
                            <li key={i} style={{color: "red"}}>
                                {todo}
                            </li>
                         <button onClick={()=>removeTodo(i)}>remove</button>

                         </div>
                        )

                    })}
                 
           </ul>
          
          
          {/* <Todo
          todos={todos} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          /> */}
             
          </div>
      </div>

     )

    
  }


export default Todolist