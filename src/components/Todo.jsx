import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ?
                                            JSON.parse(localStorage.getItem("todos")) : []); 
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if(inputText === ""){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete : false
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
       return prvTodos.filter((todo) => todo.id !== id)
  })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList])

  const toggle = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
  })
  }  

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

    <div className='flex items-center mt-7 gap-2'>
        <img className= 'w-8' src={todo_icon} alt=''></img>
        <h1 className='text-3xl font-semibold'>Todo List</h1>
    </div>
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input type='text' ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' placeholder='Add your task'></input>
      <button className='border-none rounded-full bg-blue-600 w-32 h-14
             text-white text-lg font-medium cursor-pointer' onClick={add}>ADD +</button>
    </div>
    <div>
      {
        todoList.map((item, index)=>{
          return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })
      }
    </div>
    </div>
  )
}

export default Todo