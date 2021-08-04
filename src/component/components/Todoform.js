import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid";


const Todoform = ({input, setInput, todos, setTodos ,edit ,setEdit}) => {

	 const updateTodo = (title, id, completed) =>{
            const newTodo = todos.map ((todo) => todo.id === id ? {title,id,completed} : todo
		 );
		 setTodos(newTodo);
		 setEdit(" ");
	 }
          
	  const addTodo =()=>{
		   const newTodo = [...todos,{id: uuidv4(), title:input ,completed: false}]
		   setTodos(newTodo)
	   }

	 useEffect(() => {
           if(edit){
		setInput(edit.title);
		
	   }else{
	        //setTodos([...todos,{id: uuidv4(), title:input ,completed: false}])
		setInput("");
	   }
	
	 }, [setInput, edit])
 
	const handleChange = (e) => {
           setInput(e.target.value);
        }

        const handleSubmit = (e) => {
          e.preventDefault()
        if(!edit){
           addTodo(input);
	   setInput("");
       }
      else{
	   updateTodo(input , edit.id ,edit.completed)
      }     
    };


	return (
		
	    <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Add new" 
                value={input}
               // onChange={({ target: { value } }) => setInput(value)}
                name='text'
                className='task-input'
                onChange={handleChange}
                
                required            />
            <button className="button-add" type="submit">
		   {(edit) ? "Ok" : "Add"}
	    </button>
    
        </form>
	)
}

export default Todoform
