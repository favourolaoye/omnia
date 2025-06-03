import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PasswordStep() {
  const useremail = "adeoyefav@gmail.com";
  const router = useRouter();

  return (
    <div className="min-h-svh flex justify-center items-center px-4">
      <div className="w-full max-w-md rounded-2xl  p-6 space-y-6">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-black gap-2"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>

        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Set password</h2>
          <p className="text-sm text-gray-600">
           Password requires a minimum of 8 characters and contains a mix of letters, numbers, and symbols.
          </p>
        </div>

        {/* password input Fields */}
        <form className="flex flex-col gap-3">
         <input type="password" placeholder='Enter password' className='border-2 border-gray-300 p-3 rounded-md active:outline-1 outline-purple-400 placeholder:text-gray-400 text-[14px] font-medium'/>
         <input type="password" placeholder='Confirm password' className='border-2 border-gray-300 p-3 rounded-md active:outline-1 outline-purple-400 placeholder:text-gray-400 text-[14px] font-medium'/>
        </form>
      </div>
    </div>
  );
}
