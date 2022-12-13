import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../Pages/Token/axiosInterceptor";
const ChangePassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `/api/auth/forget-password/${id}/${token}`,
      input
    );
    if (res.status === 200) {
      alert("password changed Successfully");
      navigate("/login");
    }
  };
  return (
   /*  <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
    <div>
        <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
                Logo
            </h3>
        </a>
    </div>
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={handleSubmit} >
            
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    New Password 
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="password"
                        name="newPassword"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        
                        value={input.newPassword}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Confirm Password
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="password" 
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        id=""
                        placeholder="Enter New Password"
                        
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                    />
                </div>
            </div>
            
         
            <div className="flex items-center mt-4">
                <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Change Password
                </button>
            </div>
        </form>
       
       
        
    </div>
</div> */
<div className="py-10">
      <div className="py-10 container mx-auto bg-green-50 shadow-lg rounded-xl">
        <h2 className="text-center text-green-700 text-3xl mb-4">Sign Up</h2>
        <form
          onSubmit={handleSubmit }
          className="flex flex-col items-center space-y-2"
        >
          <div className="border-2 w-60 border-green-700 flex rounded-3xl">
            <input
              required
             
              className="bg-transparent px-4 py-1 outline-none w-full border-none rounded-3xl"
              type="text"
              name="name"
              id="name"
              placeholder="New Password"
              value={input.newPassword}
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
              placeholder="Confirm Password"
              value={input.confirmPassword}
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
            Change Password
              
            </button>
          </div>
        </form>
     

        
        
      </div>
    </div>


  );
};

export default ChangePassword;
