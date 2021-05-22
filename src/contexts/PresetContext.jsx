import { useState, createContext } from 'react';
export const PresetContext = createContext();

export const PresetProvider = ({ children }) => {
    const [preset, setPreset] = useState({
        name: '--init--',
        defaultBpm: 120,
        grid: 16,
        sequencer: [
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
    })

    return (
        <PresetContext.Provider value={[preset, setPreset]}>
            {children}
        </PresetContext.Provider>
    );
}