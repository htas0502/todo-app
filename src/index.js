import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SidebarProvider from './contexts/SidebarContext/SidebarContext';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <SidebarProvider>
                <App />
            </SidebarProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
