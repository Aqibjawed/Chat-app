import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { FaBars } from 'react-icons/fa'
import { useDisplayContext } from '../../context/DisplayContext'

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation, } = useConversation();
    const {sidebarVisibility, setSidebarVisibility} = useDisplayContext();

    const messageWidth = sidebarVisibility ? 'sm:w-[300px] md:w-[350px]' : 'w-[350px]'
    useEffect(()=> {
      // cleanup function
      return () => setSelectedConversation(null);
    }, [setSelectedConversation])

    const handleSidebarVisibility = ()=> {
      if(window.innerWidth < 650){
        setSelectedConversation(null);
        setSidebarVisibility(true);
      }
    }

  return (
    <div className={`${messageWidth} flex flex-col`}>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className='bg-slate-500 bg-opacity-50 px-4 py-2 mb-0.5 flex justify-between'>
              <div className='flex items-center space-x-2'>
                  <div className='rounded-full w-10 border-2 border-black'><img src={selectedConversation.profilePic} alt="Avatar" /></div>
                  <span className='text-gray-900 font-semibold'>{selectedConversation.fullName}</span>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={handleSidebarVisibility}
                ><FaBars className='w-6 h-6'/></button>
              </div>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
    </div>
  )
}

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full mt-[30vh]'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

export default MessageContainer



// import React, { useEffect } from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'
// import useConversation from '../../zustand/useConversation'
// import { useAuthContext } from '../../context/AuthContext'

// const MessageContainer = () => {
//     const {selectedConversation, setSelectedConversation, } = useConversation();
    
//     useEffect(()=> {
//       // cleanup function
//       return () => setSelectedConversation(null);
//     }, [setSelectedConversation])

//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         {!selectedConversation ? (
//           <NoChatSelected />
//         ) : (
//           <>
//             <div className='bg-slate-500 bg-opacity-50 px-4 py-2 mb-0.5 flex items-center space-x-2 border border-black border-opacity-20'>
//                 <div className='rounded-full w-10 border-2 border-black'><img src={selectedConversation.profilePic} alt="Avatar" /></div>
//                 <span className='text-gray-900 font-semibold'>{selectedConversation.fullName}</span>
//             </div>
//             <Messages />
//             <MessageInput />
//           </>
//         )}
//     </div>
//   )
// }

// const NoChatSelected = () => {
//   const {authUser} = useAuthContext()
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 {authUser.fullName}</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className='text-3xl md:text-6xl text-center'/>
//       </div>
//     </div>
//   )
// }



{/* <div className='flex flex-row'>
              <div className='bg-slate-500 bg-opacity-50 p-3 border border-black border-opacity-20 rounded-tl-lg rounded-bl-lg'>
                <button
                  onClick={()=> setSidebarVisibility(!sidebarVisibility)}
                ><FaBars className='w-6 h-6'/></button>
              </div>
              <div>
                <div className='w-full bg-slate-500 bg-opacity-50 px-4 py-2 mb-2 border border-black border-opacity-20'>
                    <div className='flex gap-2 items-center'>
                      <div className='rounded-full w-10 border-2 border-black'><img src={selectedConversation.profilePic} alt="Avatar" /></div>
                      <span className='text-gray-900 font-semibold'>{selectedConversation.fullName}</span>
                    </div>
                </div>
                <Messages />
                <MessageInput />
              </div>
            </div>
          </> */}
