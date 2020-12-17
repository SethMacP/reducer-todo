import React, {useState} from 'react'
import Todo from './Todo'


const TodoList = (props) => {

// const [totalList , setTotalList] = useState(props.state)
// console.log("TDL : props", props)
// console.log("totalList", totalList)

return(
    <div className = "todoContainer">
        {props.state.map((todo)=>(
            <Todo
                key={todo.id}
                
                task={todo.task}
                id={todo.id}
                completed={todo.completed}

                completeTask={props.completeTask}
                />
             
        ))}


    </div>
    )
}
export default TodoList;