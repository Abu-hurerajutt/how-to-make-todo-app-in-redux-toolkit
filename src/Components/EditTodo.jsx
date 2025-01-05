import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edittodo } from '../features/userslice'

const EditTodo = ({edittext,editindex}) => {
    const [Edittext,setEdittext] = useState(edittext)
    const [isEditing,setisEditing] = useState(false)
    const dispatch = useDispatch()
    const Toggleeditpanle =()=>{
        setisEditing(!isEditing)
    }
    const saveEdit = () =>{
        dispatch(Edittodo({index:editindex,newtask:Edittext}))
        Toggleeditpanle()
    }
    const handlecancel = ()=>{
      Toggleeditpanle()
      setEdittext(edittext)
    }
  return (
    <div>
      <button onClick={Toggleeditpanle} className='p-2 text-sm text-white bg-green-900 hover:bg-green-400 hover:text-black'>Edit</button>
      {isEditing&&(
        <>
        <div className='absolute '>
            <textarea className='bg-gray-200 text-xl' value={Edittext} onChange={e=>{setEdittext(e.target.value)}} name="" id=""></textarea>
            <br />
            <button onClick={saveEdit} className='p-2 bg-blue-700 text-white hover:bg-blue-500 hover:text-black text-sm'>Save</button><button onClick={handlecancel} className='ml-1 p-2 bg-blue-700 text-white hover:bg-blue-500 hover:text-black text-sm'>Cancel</button>
        </div>
        </>
      )}
    </div>
  )
}

export default EditTodo
