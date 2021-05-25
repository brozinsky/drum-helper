import { useState, createContext } from 'react';
export const ActivePadsContext = createContext();

export const ActivePadsProvider = ({ children }) => {
    const [activePads, setActivePads] = useState([
        {
            channel: 1, name: 'Kick',
            isOn: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,]
        },
        {
            channel: 2, name: 'Snare',
            isOn: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,]
        },
        {
            channel: 3, name: 'Closed hat',
            isOn: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,]
        },
        {
            channel: 4, name: 'Open hat',
            isOn: [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,]
        }
    ]
    )

    return (
        <ActivePadsContext.Provider value={[activePads, setActivePads]}>
            {children}
        </ActivePadsContext.Provider>
    );
}