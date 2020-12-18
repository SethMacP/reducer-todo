import './App.css';
import {initialState , taskReducer} from './reducer/taskReducer'
import React, {useReducer} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {CLEAR_COMPLETE} from './actions/actions'

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

  const clearComplete = () => {
    console.log('clearComplete Ran')
    dispatch({type:CLEAR_COMPLETE})
  }


  return (
    <div>
      <button
        onClick={ ()=>clearComplete()}>Clear</button>
      <TodoForm
        addTask={addTask}
        />
      <TodoList
        state={state}
        completeTask={completeTask}
        clearComplete={clearComplete}
        />
      
    </div>
  );
}

export default App;
