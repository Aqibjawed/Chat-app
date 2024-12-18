import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import { useDisplayContext } from '../../context/DisplayContext';

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const {setSidebarVisibility} = useDisplayContext();

  const isSelected = selectedConversation?._id === conversation._id;
  
  if(isSelected && window.innerWidth < 650){
    setSidebarVisibility(false);
  }
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-blue-500 hover:bg-opacity-50 rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-blue-500 bg-opacity-50" : ""} `}
          onClick={() => setSelectedConversation(conversation)}
        >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-semibold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation
