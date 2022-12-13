import React, { useContext, useEffect, useState  } from 'react';
import axios from "../Pages/Token/axiosInterceptor";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Context/Context';














const Navbar = () => {
  const navigate = useNavigate();
  //const location = useLocation();

 // let from = location.state.pathname || "/login";
  const [state,setState] =useContext(UserContext)

 
 

  /* const handleLogout=()=>{
    localStorage.removeItem("auth")
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("user")
    
    setState(null)
    navigate("/login")
  
  } */



  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("api/auth/users/logout");
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.removeItem("auth")
        localStorage.removeItem("email")
      
        localStorage.removeItem("name")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("chakra-ui-color-mode")
 

        setState(null) 
       navigate("/login")
     
       
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };





 

  


 




  


 

 
  
  
  
 

  






 
  const menuItems = <>
  
        
  <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/map">Map</Link></li>
  
    <li><Link to="/addParking">Add  Parking services</Link></li>
   

    


    <li><Link to="/contact">Contact Us</Link></li>
  
 
    {state !==null  ?(
       <>
         <li><Link to="/dashboard">DashBoard</Link></li>
       <li> <Link onClick={handleLogout}>Logout</Link></li>
       
       </>
    )
    :(
     

<>

<li><Link to="/login">Login</Link></li>
</>
    )}
    
   

       
      
     
      

    </>
  



    
   
    
    

    


  
  


  return (
    <div className="navbar  bg-base-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
           
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Parking Lagbe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
    
    </div>
  );
};

export default Navbar;