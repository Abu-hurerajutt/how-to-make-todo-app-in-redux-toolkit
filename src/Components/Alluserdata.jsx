import React from 'react'
import { useSelector } from 'react-redux'


const Alluserdata = () => {
  const datas = useSelector((state)=>{
    return state.admin
  })
  return (
    <div>
      {datas.map((todo,index)=>{
        return(
          <div className='text-black' key={index}>{todo}</div>
        )
      })}
    </div>
  )
}

export default Alluserdata
