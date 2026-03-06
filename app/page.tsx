import Link from "next/link";
import Image from "next/image";
import SigninForm from "@/components/ui/SigninForm";

export default function LandingPage() {

  return(
    <div className="min-h-screen bg-[#592F2F] flex flex-col overflow-hidden">

      <div className="flex flex-1 flex-col items-center">
        
        {/* Spacer */}
        <div className="flex-3"></div>

        {/* Form Section */}
        <section className="relative max-w-53.75 md:max-w-sm w-full flex flex-col justify-center items-center">
          <Image
            src="/images/logo/LOGO.png"
            alt="Logo"
            width={220}
            height={10}
            className="z-10 scale-125 mb-10">

          </Image>

          <Image
            src="/images/decorations/Coffee_splash.png"
            alt="Coffee Trail"
            width={300}
            height={10}
            className="absolute pointer-events-none scale-220 z-0 top-[-83] right-[-5] md:scale-175 md:top-[-125] md:right-[30]">
          </Image>

          <Image 
            src="/images/decorations/Coffee_spill.png" 
            alt="Coffee Spill"
            width={150}
            height={10}
            className="absolute pointer-events-none right-[-91.25px] top-26">
          </Image>

          <Image
            src="/images/decorations/Coffee_trail_1.png"
            alt="Coffee Trail"
            width={62}
            height={10}
            className="absolute pointer-events-none -right-7.5 top-63.5 md:top-64.5">
          </Image>

          <Image
            src="/images/decorations/Coffee_trail_2.png"
            alt="Coffee Trail"
            width={35}
            height={10}
            className="absolute pointer-events-none right-0.75 top-63.5 md:top-64.5">
          </Image>

          <Image
            src="/images/decorations/Coffee_trail_3.png"
            alt="Coffee Trail"
            width={150}
            height={10}
            className="absolute pointer-events-none -right-9.25 bottom-[-43.5px]">
          </Image>

          <h2 className="text-white text-center mb-5 ">SIGN IN</h2>

          <SigninForm />
             
        </section>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Link Section */}    
        <div className="flex gap-10">
          <Link href={"/signup"} className="text-[#E8C26A] hover:text-[#da9f14] w-fit">Create an account</Link>
          <Link href={"/signup"} className="text-[#E8C26A] hover:text-[#da9f14] w-fit">Continue as guest</Link>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

      </div>

      <p className=" text-white text-xs md:text-sm mb-15 text-center">CAFÉNATED COPYRIGHT ALL RIGHTS RESERVED 2026</p> 

    </div>
  );
}