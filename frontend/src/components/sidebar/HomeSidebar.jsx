import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { useDisplayContext } from '../../context/DisplayContext'
import {MdClose} from 'react-icons/md'
import useConversation from '../../zustand/useConversation'
import toast from 'react-hot-toast'

const HomeSidebar = () => {
    const {sidebarVisibility, setSidebarVisibility} = useDisplayContext();
    const {selectedConversation} = useConversation();

    // const handleCloseSidebar = ()=> {
    //   if(!selectedConversation){
    //     toast.error('Please Select a Chat');
    //   }
    //   else{
    //     setSidebarVisibility(false);
    //   }
    // }
  return (
    <div>
      {sidebarVisibility ? (
        <div className='w-[350px] sm:w-[300px] relative border-r border-slate-500 p-4 flex flex-col h-full'>
          <SearchInput />
          <div className='divider px-3'></div>
          <Conversations />
          <div className='absolute inset-y-[92%] flex w-full justify-between pr-10'>
            <LogoutButton />
            {/* <button
              onClick={handleCloseSidebar}
            ><MdClose className='w-6 h-6'/></button> */}
          </div>
        </div>
      ) : ''}
    </div>
  ) 
    
}

export default HomeSidebar


// const HomeSidebar = () => {
//   const {sidebarVisibility, setSidebarVisibility} = useDisplayContext();
// return (
//   <div>
//     {sidebarVisibility ? (
//       <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput />
//         <div className='divider px-3'></div>
//         <Conversations />
//         <LogoutButton />
//       </div>
//     ) : ''}
//   </div>
// ) 
  
// }


// const HomeSidebar = () => {
//   const {sidebarVisibility, setSidebarVisibility} = useDisplayContext();
//   const {selectedConversation} = useConversation();

//   const handleCloseSidebar = ()=> {
//     if(!selectedConversation){
//       toast.error('Please Select a Chat');
//     }
//     else{
//       setSidebarVisibility(false);
//     }
//   }
// return (
//   <div>
//     {sidebarVisibility ? (
//       <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
//         <div className='flex justify-between pr-3 pl-2 pb-4 pt-0'>
//           <button
//             onClick={handleCloseSidebar}
//           ><MdClose className='w-6 h-6'/></button>
//           <LogoutButton />
//         </div>
//         <SearchInput />
//         <div className='divider px-3'></div>
//         <Conversations />
//       </div>
//     ) : ''}
//   </div>
// ) 
  
// }