import React,{createContext,useReducer,useContext} from "react";

export const DataLayer = createContext();

const StateProvider= ({children,reducer,initialState}) => {
 return (<DataLayer.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayer.Provider>
 )
}

export const UseContextState = () => useContext(DataLayer);
export default StateProvider;