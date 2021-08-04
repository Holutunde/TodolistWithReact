import React,{ useState } from 'react'
import Todoform from './Todoform'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


const Todo = ({todos, completeTodo,removeTodo, updateTodo}) => {
	const[edit, setEdit] = useState({
		id: null,
		value: ' '
	})

	const submitUpdate =value => {
		updateTodo(edit.id, value)
		setEdit({
			id:null,
			value:''
		})
	}
	if(edit.id){
		return<Todoform edit={edit} onsubmit={submitUpdate}/>
	}
	return (
		todos.map((todo, i)=>(
		<div 
		   className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
		   key={i}
		>
			<div key={i} onClick={() => completeTodo(i)}>
				{todo}
			</div>
			<div className="icons">
				<RiCloseCircleLine
				onClick={()=>removeTodo(i)}
				className="delete-icon"
				/>
				<TiEdit
				onClick={()=>setEdit({id: i,value: todo})}
				className="edit-icon"
				/>

			</div>

		</div>
	))

	)
}

export default Todo
