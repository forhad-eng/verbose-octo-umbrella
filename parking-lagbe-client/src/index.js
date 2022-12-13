

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import {UserProvider} from './Context/Context';
import { SearchContext, SearchContextProvider } from './Context/SearchContext';
import { ChakraProvider, theme } from '@chakra-ui/react'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
     
    <UserProvider>
    <SearchContextProvider>
    
   

    <App />
  
     
  
  
   
      </SearchContextProvider>
     
      </UserProvider>
     
    </BrowserRouter>
     
       
     
  
  </React.StrictMode>
);
