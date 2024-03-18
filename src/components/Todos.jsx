import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
const Todos = () => {
    const todos= useSelector(state => state.todos);
    const dispatch=useDispatch();
    console.log(todos);
  return (
    <>
        <div className='text-center text-2xl font-bold my-4' >Todos</div>
        {todos.map((todo)=>(
            <div key={todo.id} className='flex flex-row justify-center mb-2' >
                <div className='w-[50%] text-lg font-semibold '>
                    {todo.text} 
                </div> 

                <button className='bg-red-500  text-white text-lg font-bold p-2 rounded shadow-lg' onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>

            </div>
        ))}
        {todos.length == 0 && <div className='text-red-400 text-lg text-center'>No todos found...</div>}
    </>
  )
}

export default Todos;
