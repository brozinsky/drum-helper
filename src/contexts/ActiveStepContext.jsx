import { useState, createContext } from 'react';
export const ActiveStepContext = createContext();

export const ActiveStepProvider = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <ActiveStepContext.Provider value={[activeStep, setActiveStep]}>
            {children}
        </ActiveStepContext.Provider>
    );
}