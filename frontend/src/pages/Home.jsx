import React, { useState } from 'react'
import HomeSidebar from '../components/Sidebar/HomeSidebar'
import MessageContainer from '../components/messages/MessageContainer'
import { useDisplayContext } from '../context/DisplayContext'
import useConversation from '../zustand/useConversation'

// const Home = () => {
//   return (
//     <div className='p-0.5 rounded-lg border-2 border-black border-opacity-60'>
//         <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <HomeSidebar />
//             <MessageContainer />
//         </div>
//     </div>
//   )
// }


const Home = () => {
  const {selectedConversation} = useConversation();
  const messageDisplay = (selectedConversation === null) ? 'hidden' : 'block';

  console.log(messageDisplay);
  return (
    <div className='p-0.5 rounded-lg border-2 border-black border-opacity-60'>
        <div className='flex h-[80vh] w-[350px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <HomeSidebar />
            <div className={`flex ${messageDisplay}`}>
              <MessageContainer />
            </div>
        </div>
    </div>
  )
}


export default Home