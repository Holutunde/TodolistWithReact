import React, { useState ,useEffect, useRef } from 'react'

export default function Todoform(props) {
    
    const [input, setInput] = useState(''); 

    const inputRef = useRef(null)
     
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit(input);

        setInput('')
    }

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
                ref={inputRef}
                required

            />
            <button className="button-add" type="submit">Add next agenda</button>
    
        </form>
    )
}
