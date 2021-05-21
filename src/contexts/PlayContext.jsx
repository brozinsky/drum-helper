import { useState, createContext } from 'react';
export const PlayContext = createContext();

export const PlayProvider = ({ children }) => {
    const [isPlayActive, setIsPlayActive] = useState(false)

    return (
        <PlayContext.Provider value={[isPlayActive, setIsPlayActive]}>
            {children}
        </PlayContext.Provider>
    );
}