import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SelectProvider } from './contexts/SelectContext';
import { SelectedKitProvider } from './contexts/SelectedKitContext';
import { PlayProvider } from './contexts/PlayContext';
import { BpmProvider } from './contexts/BpmContext';
import { ActiveStepProvider } from './contexts/ActiveStepContext';

ReactDOM.render(
  <React.StrictMode>

    <BpmProvider>
      <PlayProvider>
        <ActiveStepProvider>
          <SelectedKitProvider>
            <SelectProvider>
              <App />
            </SelectProvider>
          </SelectedKitProvider>
        </ActiveStepProvider>
      </PlayProvider>
    </BpmProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
