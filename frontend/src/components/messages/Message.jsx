import React from 'react'
import chatbg from '../../assets/chat-bg.png'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={chatbg} alt="Chat bubble component" />
        </div>
      </div>
      <div className='chat-bubble text-white bg-blue-500'>Hii, What is up?</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message
