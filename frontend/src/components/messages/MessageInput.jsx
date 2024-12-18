import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async (e)=> { 
      e.preventDefault();
      if(!message){
        return;
      }
      await sendMessage(message);

      setMessage('')
    }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input 
                type="text" 
                className='border text-sm rounded-lg block w-full p-2.5 bg-gray-500 bg-opacity-50 border-gray-600 text-white max-w-[calc(100%-30px)]'
                placeholder='Send a message'
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-0'>
                {loading ? <div className='loading loading-spinner'></div> : <BsSend className='h-6 w-6'/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
