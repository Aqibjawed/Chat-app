import { createContext, useContext, useState } from "react";


const DisplayContext = createContext();

export const useDisplayContext = () => {
    return useContext(DisplayContext);
}

export const DisplayContextProvider = ({children})=> {
    const [sidebarVisibility, setSidebarVisibility] = useState(true);
    
    return <DisplayContext.Provider value={{sidebarVisibility, setSidebarVisibility}}>
            {children}
        </DisplayContext.Provider>
    
}