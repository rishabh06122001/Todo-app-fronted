import React from 'react'
// import { updateMany } from '../../../backend/models/TodoModels'
// import { deleteTodo } from '../../../backend/conroller/TodoController'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const Todo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode}></BiEdit>
            <AiFillDelete className='icon' onClick={deleteTodo}/>
        </div>
    </div>
  )
}

export default Todo;