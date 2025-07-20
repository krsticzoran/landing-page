"use client";
import Image from "next/image";



import email from "@/assets/mail.png"

import FormButton from "./form-button";

export default function Subscription() {
  

  return (
    <>
      <form
       
        className="subscription relative mt-4 lg:mt-8"
       
      >
        <input
          className="autofill:border-black-900 w-full border-b bg-transparent pb-2 outline-none autofill:bg-primary"
          type="email"
          name="email"
          placeholder="Enter your email"
         
          required
        />
        <FormButton className={`absolute bottom-3 right-2`}>
          <Image src={email} width={20} height={20} alt="email" />
        </FormButton>
      </form>
      
    </>
  )
}