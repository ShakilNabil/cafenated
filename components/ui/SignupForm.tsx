"use client"

import Input from "./Input";

type StepProps = {

}

function Step1() {
     return(
          <div>
               <Input 
               id="email" 
               label="Email"
               type="text"
               placeholder="Email"
               value=""
               onChange={(event) => {}}
               labelClassName="sr-only"
               inputClassName="mb-2"/>
               

               <Input 
               id="phone" 
               label="Phone"
               type="text"
               placeholder="Phone Number"
               value=""
               onChange={(event) => {}}
               labelClassName="sr-only"/>
          </div>         
             
     );
}



export default function SignupForm() {
     return(
          <Step1 />
     );
}