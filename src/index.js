import React,{createContext,useContext,useReducer} from "react";
// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import  StateProvider  from "./StateProvider";
import reducer, { initialState } from "./reducer";
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
        <App />
     </StateProvider>
    </React.StrictMode>
);

