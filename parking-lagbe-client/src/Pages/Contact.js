import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../Pages/Token/axiosInterceptor";



const Contact=() =>{
 
  
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone:"",
    message:"",

 });

  const  SendMessage = async (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    
    try {
      const response = await axios.post("api/auth/contact", input);
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  
    

  return (
     

         <div className="py-10">
         <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
           <h2 className="text-center text-green-700 text-3xl mb-4">Contact Us</h2>
           <form
             onSubmit={SendMessage}
             className="flex flex-col items-center space-y-2"
           >
             <div className="border-2 w-60 border-green-700 flex rounded-3xl">
               <input
                 required
                
                 className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
                 type="fullName"
                 name="fullName"
                 id="fullName"
                 placeholder="Your Name"
                 value={input.fullName}
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
                 type="phone"
                 name="phone"
                 id="phone"
                 placeholder="Your Phone Number"
                 value={input.phone}
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
                 type="message"
                 name="message"
                 id="message"
                 placeholder="Your Message"
                 value={input.message}
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
                 Contact Us
                 
               </button>
             </div>
           </form>
           </div>
           </div>
    
  );
}

export default Contact;