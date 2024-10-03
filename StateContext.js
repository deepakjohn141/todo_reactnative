import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = (props) => {
    const [tasks, setTasks] = useState([]);

   

    return (
        <StateContext.Provider value={{tasks: [tasks, setTasks]}}>
            {props.children}
        </StateContext.Provider>
    )
}