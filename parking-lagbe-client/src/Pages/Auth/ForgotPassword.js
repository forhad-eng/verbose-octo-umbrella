import React, { useState } from "react";
import axios from "../../Pages/Token/axiosInterceptor";
const ForgetPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("/api/auth/forget-password", { email });

        if (res.status === 200) {
          alert("Pls Check Your Email A Reset Password Link send for your email Address");
        }
        
   
    } catch (error) {
        alert(error.response.data.message);
      }
    

   
  };

  return (
  

<div className="py-10">
      <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
        <h2 className="text-center text-green-700 text-3xl mb-4">Reset Password</h2>
        <form
          onSubmit={handleSubmit }
          className="flex flex-col items-center space-y-2"
        >
          
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              required
              
              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
         

       

          <div className="flex items-center justify-center mt-5">
            <button type="submit" className="mt-2 flex items-center cursor-pointer justify-center bg-green-600 rounded-full px-6 py-2 text-gray-50 tracking-widest font-semibold transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-opacity-70">
            Send Email
              
            </button>
          </div>
        </form>
     

        
        
      </div>
    </div>
    
  );
};

export default ForgetPassword;
