import React from 'react';
import { useState, createContext } from 'react';

// create sidebar context
export const SidebarContext = createContext();

function SidebarProvider({ children }) {
    // sidebar open/close state
    const [isOpen, setIsOpen] = useState(false);

    // sidebar event handler
    const handleSidebarClose = () => {
        setIsOpen(false);
    };

    return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleSidebarClose }} >{children}</SidebarContext.Provider>;
}

export default SidebarProvider;
