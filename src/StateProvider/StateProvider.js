//set up data layer or react cntext api
//We need this to track the basket data

import React, {createContext, useContext, useReducer} from "react";

//This is data layer
export const StateContext = createContext();  

//Build a provier 
export const StateProvider= ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);

//use it inside of a component
export const useStateValue = () => useContext(StateContext);