import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import ThemeContext from "./context/themeContext"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
       <ThemeContext.Provider value={"dark"}>
           <App />
        </ThemeContext.Provider>
    </React.StrictMode>
)