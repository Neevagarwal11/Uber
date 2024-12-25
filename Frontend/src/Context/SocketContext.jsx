import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io('http://localhost:5000' , {withCredentials:true ,transports: ['websocket']
});

function SocketProvider({ children }) {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);


    return (
        <SocketContext.Provider value={{ socket}}>
            {children}
        </SocketContext.Provider>
    );
}

export default SocketProvider;
