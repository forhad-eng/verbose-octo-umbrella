import React, { createContext, useReducer,useState,useEffect } from "react";
import {reducer,initialState} from "../Reducer/useReducer";
  const UserContext = createContext();
  const UserProvider = ({ children }) => {
   
  const [ state,setState]=useState({
    isUser:{},token:"",
  })
  useEffect(()=>{
    setState(JSON.parse(window.localStorage.getItem("auth")))
  },[])
   
  
    return (
      <UserContext.Provider value={[state,setState ]}>
        {children}
      </UserContext.Provider>
    );
  };
  export {UserContext,UserProvider}
 