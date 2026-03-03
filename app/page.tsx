"use client"

import { useState, useEffect, FormHTMLAttributes } from "react";
import Link from "next/link";
import { satisfy } from "./fonts";

export default function LandingPage() {

  function handleLoginSubmit(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();      
  }

  return(
    <div className="min-h-screen bg-[#592F2F] flex flex-col">

      <div className="flex flex-1 justify-center items-center">
        <section className=" max-w-[215px] md:max-w-sm w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-[24px] md:text-5xl md:mb-10 mb-6 w-full">Welcome to 
            <span className={`${satisfy.className} text-[#FFFD6E] text-[32px] md:text-6xl md:mt-4 block text-right`}>Cafenated</span>
          </h1>

          <h2 className="text-white text-center mb-5">Sign in</h2>

          <form onSubmit={handleLoginSubmit} className="w-full">

            <div>
              <label htmlFor="emailOrPhone" className="sr-only">Email</label>
              <input 
                type="text"
                id="emailOrPhone" 
                placeholder="Email or phone number"
                className="bg-[#131313]/60 text-[#D6CFCA] rounded-xl p-3 my-2 w-full border border-transparent focus:outline-none focus:border-white/80 shadow-sm"  
              /> 
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                type="text"
                id="password" 
                placeholder="Password"
                className="bg-[#131313]/60 text-[#D6CFCA] rounded-xl p-3 mb-4 w-full border border-transparent focus:outline-none focus:border-white/80 shadow-sm"  
              /> 
            </div>

            <button type="submit" className="bg-[#9B4040] text-[#D6CFCA] rounded-xl p-3 w-full mb-3 shadow-md">Enter</button>  
          </form>

          <Link href={"/signup"} className="text-[#E8C26A] hover:text-[#da9f14] w-fit">Create an account</Link>  
    
        </section> 
      </div>

      <p className=" text-white text-xs md:text-sm pb-15 text-center">CAFÉNATED COPYRIGHT ALL RIGHTS RESERVED 2026</p> 

    </div>
  );
}