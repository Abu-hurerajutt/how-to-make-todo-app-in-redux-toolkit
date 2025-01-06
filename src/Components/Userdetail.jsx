import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, Deletetodo, Removeall } from '../features/userslice'
import EditTodo from './EditTodo'

const Userdetail = () => {
    const [text,settext] = useState('')
    const dispatch = useDispatch()
    const adddata = ()=>{
      if(text===""){
        alert("input cant be empty")
      }
      else{
        dispatch(addUser(text));
        settext("");
      }
        
    }
    const data = useSelector((state)=>{
        return state.user
    })
    const Handledelete=(index)=>{
      dispatch(Deletetodo(index))
    }
    const clearall = ()=>{
      dispatch(Removeall())
    }
  return (
    <div>
        <input type="text"
        value={text}
        className="bg-gray-500 text-black p-3 "
        onChange={e=>(settext(e.target.value))}
        />
      <ul>
        {data.map((datas,index)=>{
            return(
                <li key={index} className='flex justify-between text-black text-3xl w-[50%] p-2 bg-green-400'>
            {datas} <span className='flex'><EditTodo editindex={index} edittext={datas}/> <button onClick={()=>Handledelete(index)} className='text-red-800 font-bold hover:text-red-400'>x</button></span>
        </li>
            )
        })}
      </ul>
      <button onClick={adddata} className='bg-green-500 p-2 hover:bg-green-300' >add Todo</button>
      <button onClick={clearall} className='bg-red-600 p-2 ml-3 hover:bg-red-400' >remove all</button>
    </div>
  )
}

export default Userdetail
