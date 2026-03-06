"use client"

import { useState, useEffect } from "react";
import Input from "./Input";

export default function SigninForm() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     function handleLoginSubmit(event: React.SubmitEvent<HTMLFormElement>){
          event.preventDefault();      
     }
     
     return(
          <form onSubmit={handleLoginSubmit} className="w-full flex flex-col items-center">

               {/* Email Field Container */}
               <Input 
                    id="email" 
                    label="Email" 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    labelClassName="sr-only"
                    inputClassName="mb-2" 
               />

               {/* Password Field Container */}
               <Input 
                    id="password" 
                    label="Password" 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    labelClassName="sr-only"
                    inputClassName="mb-4"  
               />
               
               {/* Submit Btn */}
               <button type="submit" className="bg-[#C89156]/50 text-white rounded-xl p-3 w-1/2 mb-3 shadow-md">Sign in</button> 
    
          </form> 
     );
}
