import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {useAuthContext} from '../context/AuthContext'

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async ({fullName, userName, password, confirmPassword, gender})=>{
        setLoading(true);
        const success = handleInputErrors({fullName, userName, password, confirmPassword, gender})
        if(!success){
            return;
        }

        try{
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({fullName, userName, password, confirmPassword, gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem('chat-user', JSON.stringify(data))
            setAuthUser(data)
        } catch(error){
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    };

    return {loading, signup}
}

export default useSignup

function handleInputErrors({fullName, userName, password, confirmPassword, gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error('Please Fill All The Fields');
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Passwords Do Not Match');
        return false;
    }

    if(password.length < 6){
        toast.error('Password Must be atleast 6 characters');
        return false;
    }

    return true;
}