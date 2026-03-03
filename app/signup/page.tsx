"use client"

import Link from "next/link"

export default function SignUp() {
     return(
          <div>
            <h1>Sign Up Here</h1>
            <Link href={"/"} className="text-blue-500">Go back to login</Link>   
          </div>
     );     
}