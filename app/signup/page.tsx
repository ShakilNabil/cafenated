
import SignupForm from "@/components/ui/SignupForm";
import Link from "next/link"

export default function SignUp() {
     return(
          <div className="min-h-screen bg-[#592F2F] flex
          flex-col justify-center items-center">

               <div className="border max-w-53.75 md:max-w-sm w-full flex flex-col justify-center items-center">
                    <SignupForm />
               
               </div> 

          </div>
     );     
}