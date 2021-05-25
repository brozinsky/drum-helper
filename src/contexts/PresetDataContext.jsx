import { useState, createContext } from 'react';
export const PresetDataContext = createContext();

export const PresetDataProvider = ({ children }) => {
    const [presetData, setPresetData] = useState([
        {
            kit: 'electronic',
            genres: [
                {
                    type: 'house',
                    presets: [
                        {
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
                        },
                        {
                            name: 'house-1',
                            defaultBpm: 100,
                            grid: 16,
                            sequencer: [
                                {
                                    channel: 1, name: 'Kick',
                                    isOn: [
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,]
                                },
                                {
                                    channel: 2, name: 'Snare',
                                    isOn: [
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,]
                                },
                                {
                                    channel: 3, name: 'Closed hat',
                                    isOn: [
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, false,]
                                },
                                {
                                    channel: 4, name: 'Open hat',
                                    isOn: [
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, true,]
                                }
                            ]
                        },
                        {
                            name: 'house-2',
                            defaultBpm: 100,
                            grid: 16,
                            sequencer: [
                                {
                                    channel: 1, name: 'Kick',
                                    isOn: [
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,]
                                },
                                {
                                    channel: 2, name: 'Snare',
                                    isOn: [
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,]
                                },
                                {
                                    channel: 3, name: 'Closed hat',
                                    isOn: [
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, false,]
                                },
                                {
                                    channel: 4, name: 'Open hat',
                                    isOn: [
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, true,]
                                }
                            ]
                        }
                    ],
                }]
        },
        {
            kit: 'hip-hop',
            genres: [
                {
                    type: 'classic',
                    presets: [
                        {
                            name: 'classic-1',
                            defaultBpm: 90,
                            grid: 16,
                            sequencer: [
                                {
                                    channel: 1, name: 'Kick',
                                    isOn: [
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,]
                                },
                                {
                                    channel: 2, name: 'Snare',
                                    isOn: [
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,]
                                },
                                {
                                    channel: 3, name: 'Closed hat',
                                    isOn: [
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, false,]
                                },
                                {
                                    channel: 4, name: 'Open hat',
                                    isOn: [
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, true,]
                                }
                            ]
                        },
                        {
                            name: 'classic-2',
                            defaultBpm: 90,
                            grid: 16,
                            sequencer: [
                                {
                                    channel: 1, name: 'Kick',
                                    isOn: [
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,
                                        true, false, false, false,]
                                },
                                {
                                    channel: 2, name: 'Snare',
                                    isOn: [
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,
                                        false, false, true, false,]
                                },
                                {
                                    channel: 3, name: 'Closed hat',
                                    isOn: [
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, true,
                                        false, true, false, false,]
                                },
                                {
                                    channel: 4, name: 'Open hat',
                                    isOn: [
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, false,
                                        false, false, false, true,]
                                }
                            ]
                        }
                    ],
                }]
        },
    ])

    return (
        <PresetDataContext.Provider value={[presetData, setPresetData]}>
            {children}
        </PresetDataContext.Provider>
    );
}