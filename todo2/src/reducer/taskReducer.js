import {ADD_TASK, COMPLETE_TASK, CLEAR_COMPLETE} from '../actions/actions'


export const initialState = [
    {
        task:"Learn Reducers",
        completed:false,
        id: 2468
    },{
        task:"Learn Hooks",
        completed:false,
        id: 24689
    },{
        task:"Learn Everything",
        completed:false,
        id: 24681
    },
]

export const taskReducer = (state, action) =>{
    switch(action.type){
        case(ADD_TASK):
        console.log('Add task ran on: ',action.payload);
        return[...state, action.payload]
    }
    switch(action.type){
        case(COMPLETE_TASK):
        console.log('Complete task ran on:', action.payload);
        return state.map( item => {
            if(item.id === action.payload)
            { // console.log("YES",item,item.id, action.payload)
                return {...item, completed: !item.completed}}
            else
            {// console.log("NO",item.id, action.payload)
                return item}
        })
    }
    switch(action.type){
        case(CLEAR_COMPLETE):
        console.log('CLEAR_COMPLETE ran on: ', action.payload)
        return state.filter(item =>  {return !item.completed})
    }
}