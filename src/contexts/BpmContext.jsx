import { useState, createContext } from 'react';
export const BpmContext = createContext();

export const BpmProvider = ({ children }) => {
    const [bpm, setBpm] = useState(120)

    return (
        <BpmContext.Provider value={[bpm, setBpm]}>
            {children}
        </BpmContext.Provider>
    );
}