import './App.css';
import {initialState , taskReducer} from './reducer/taskReducer'
import React, {useReducer} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const [state, dispatch ] = useReducer(taskReducer, initialState);
  console.log('current app state',state)

  const addTask = (newTask , action) => {
    console.log('addTask Ran', newTask, action)
    dispatch({type:action, payload: newTask}) 
  }

  const completeTask = ( taskId, action ) => {
    console.log('completeTask Ran')
    dispatch({type:action, payload: taskId})
  }


  return (
    <div>
      <TodoForm
        addTask={addTask}
        />
      <TodoList
        state={state}
        completeTask={completeTask}
        />
      
    </div>
  );
}

export default App;
