import React from 'react'
import { User_Icon } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex shadow-sm my-5'>
        <img className='h-6 w-6 mx-1' alt='pfp' src={User_Icon}></img>
        <span className='font-bold text-sm mx-1'>{name}</span>
        <span className='mx-1 text-sm '>{message}</span>
    </div>
  )
}

export default ChatMessage