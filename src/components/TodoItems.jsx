// eslint-disable-next-line no-unused-vars
import React from 'react'
import tick from '../assets/tick.png'
import non_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

// eslint-disable-next-line react/prop-types
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={ isComplete ? tick : non_tick} alt='' className='w-7'></img>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-700 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt='' className='w-3.5 cursor-pointer'></img>
    </div>
  )
}

export default TodoItems
