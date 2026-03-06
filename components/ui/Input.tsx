"use client"

type InputProps = {
     id: string,
     label: string,
     type: string,
     placeholder: string,
     value: string,
     onChange: React.ChangeEventHandler<HTMLInputElement>,
     labelClassName?: string 
     inputClassName?: string
}

export default function Input(InputProps: InputProps) {

     const {id, label, type, placeholder, value, onChange, labelClassName, inputClassName} = InputProps;
     
     return(
          <div className="w-full">
               <label htmlFor={id} className={labelClassName}>{label}</label>
               <input 
                    type={type}
                    id={id} 
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={`bg-[#131313]/60 text-[#D6CFCA] autofill:bg-[#131313] rounded-xl p-3 w-full border border-transparent focus:outline-none focus:border-white/50 shadow-sm ${inputClassName}`}  
               /> 
          </div>
     );
}