import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notification from '../assets/sounds/notification3.mp3'

const useListenMessages = () => {
  const {socket, onlineUsers} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=> {
    socket?.on('newMessage', (newMessage)=> {
        const sound = new Audio(notification);
        sound.playbackRate = 3;
        sound.play();
        setMessages([...messages, newMessage]);
    })

    return ()=> {
        socket?.off('newMessage');
    }
  }, [socket, setMessages, messages]) 
}

export default useListenMessages
