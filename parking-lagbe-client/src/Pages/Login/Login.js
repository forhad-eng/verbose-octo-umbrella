import React, { useContext, useState } from "react";
import axios from "../../Pages/Token/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Login.css"




const Login = () => {
  const navigate = useNavigate();

 
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [state,setState]= useContext(UserContext)
 
  
    

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response= await axios.post("api/auth/users/login",input, )
       
     
   
      if (response.status === 200 && response.data.isAdmin === true) {
        localStorage.setItem("token", response.data.token);
        setState({isUser:response.data.isUser})
     
        window.localStorage.setItem("auth",JSON.stringify(response.data.isUser))
       
        alert(response.data.message);
        
     
       
       // localStorage.setItem("name", response.data.name);
       // localStorage.setItem("email", response.data.email);
      
       
        navigate("/dashboard");
      }
      else {
        localStorage.setItem("token", response.data.token);
        setState({isUser:response.data.isUser})
        
       
        alert(response.data.message);
        
      
     
      
        navigate("/dashboard")
      }
    
     
      

     
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  

  return (
   
<div className="py-10">
<div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
  <h2 className="text-center text-green-700 text-3xl mb-4">Sign In</h2>
  <form
    onSubmit={handleLogin}
    className="flex flex-col items-center space-y-2"
  >
    <div className="border-2 w-60 border-green-700 flex rounded-3xl">
      <input
        required
      
        className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        value={input.email}
        onChange={(e) =>
          setInput({
            ...input,
            [e.target.name]: e.target.value,
          })
        }
      />
    </div>
    <div className="border-2 w-60 border-green-700 flex rounded-3xl">
      <input
        required
        
        className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
        type="password"
        name="password"
        id="password"
        placeholder="Your Password"
        onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
      />
    </div>

    

    <div className="flex items-center justify-center mt-5">
      <button type="submit" className="mt-2 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
       Login
      </button>
    </div>
  </form>
  <div className="flex items-center justify-center space-x-8 mt-4 px-10">
    <Link className="text-blue-800" to="/reset-password">
      Forgot Password?
    </Link>
    <p>
      Don't have an account?{" "}
      <Link className="text-blue-800" to="/register">
        Create new.
      </Link>
    </p>
  </div>

  
</div>
</div>
     



  );
};

export default Login;