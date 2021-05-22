import { useState, createContext } from 'react';
export const SelectContext = createContext();

export const SelectProvider = ({ children }) => {
    const [selectData, setSelectData] = useState([
        {
            kit: 'electronic',
            genres: [
                {
                    type: 'house',
                    selected: false,
                    presets: [
                        {
                            name: 'house-1',
                            sequencer: [
                                { kick: '1000100010001000' },
                                { snare: '0010001000100010' },
                                { openHat: '0101010101010101' },
                                { closedHat: '1000000000000000' },
                            ]
                        },
                        {
                            name: 'house-2',
                            sequencer: [
                                { kick: '1000100010001000' },
                                { snare: '1010101010101010' },
                                { openHat: '0101010101010101' },
                                { closedHat: '1000000000000000' },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            kit: 'hip-hop',
            genres: [
                {
                    type: 'boom-bap',
                    selected: false,
                    presets: [
                        {
                            name: 'boom-bap-1',
                            sequencer: [
                                { kick: '1000100010001000' },
                                { snare: '0010001000100010' },
                                { openHat: '0101010101010101' },
                                { closedHat: '1000000000000000' },
                            ]
                        },
                        {
                            name: 'boom-bap-2',
                            sequencer: [
                                { kick: '1000100010001000' },
                                { snare: '1010101010101010' },
                                { openHat: '0101010101010101' },
                                { closedHat: '1000000000000000' },
                            ]
                        }
                    ]
                },
            ]
        },
    ])

    return (
        <SelectContext.Provider value={[selectData, setSelectData]}>
            {children}
        </SelectContext.Provider>
    );
}