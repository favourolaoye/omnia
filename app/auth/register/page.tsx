"use client";

import { useRegisterStore } from "@/store/regStore"
import EmailStep from "@/app/_components/emailStep";
import VerifyStep from "@/app/_components/verify";
import PasswordStep from "@/app/_components/password";
import Sucess from "@/app/_components/sucess";

export default function page() {
  const step = useRegisterStore((state) => state.step);
  return (
    <div className="flex items-center justify-center h-svh bg-gray-100">
        {step === 'email' && <EmailStep />}
        {step === 'verify' && <VerifyStep />}
        {step === 'password' && <PasswordStep />}
        {step === 'success' && <Sucess />}
    </div>
  )
}
