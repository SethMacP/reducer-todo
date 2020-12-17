import React, {useState} from 'react'
import {COMPLETE_TASK} from '../actions/actions'

const Todo = (props) => {

    console.log('todo props',props)

    return(
        <div 
            className= {props.completed ? "doneTask" : "singleTask"}
            onClick={(e)=>props.completeTask(props.id, COMPLETE_TASK)}                                
            >
                <p>Task: {props.task}</p>
                <p>ID: {props.id}</p>
                <p>Complete: {props.completed ? "YES" : "NO"}</p>
        
        </div>
    )
}

export default Todo;