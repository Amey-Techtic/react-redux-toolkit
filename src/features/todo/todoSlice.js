import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [],

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        //this state in addTodo action is connected with initialState{ todos:[] } of this slice
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }    
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
           state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        }
    }  
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;