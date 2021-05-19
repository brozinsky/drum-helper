import { useState, createContext } from 'react';
export const SelectedKitContext = createContext();

export const SelectedKitProvider = ({ children }) => {
    const [kitSelected, setKitSelected] = useState(null)

    return (
        <SelectedKitContext.Provider value={[kitSelected, setKitSelected]}>
            {children}
        </SelectedKitContext.Provider>
    );
}