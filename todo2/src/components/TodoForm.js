import React, {useState} from 'react'
import {ADD_TASK} from '../actions/actions'
const TodoForm = (props) => {

const [formTask, setFormTask] = useState("");

// console.log('props', props)

const handleChanges = (e) => {
    console.log(e.target.value)
    setFormTask({
        [e.target.name]:e.target.value
    })
    
}

const formSubmit = e => {
    e.preventDefault()
    console.log('Form Submitted', formTask)
    props.addTask({
        task:formTask.task,
        completed: false,
        id: Date.now()
    },ADD_TASK)
    setFormTask("")
}





return(
<>
<form
onSubmit={formSubmit}>
    <input
        name = "task"
        id   = "task"
        type = "text"
        placeholder = "Add task here..."
        onChange={handleChanges}
        
        />
    <button
         
        >Add</button>
</form>
</>
)

}
export default TodoForm;