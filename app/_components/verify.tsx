import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VerifyStep() {
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
          <h2 className="text-2xl font-semibold text-gray-800">Enter verification code</h2>
          <p className="text-sm text-gray-600">
            The verification code has been sent to your email <span className="text-blue-600 ml-1">{useremail}</span>
          </p>
        </div>

        {/* Code Input Fields */}
        <form className="flex justify-between gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </form>
      </div>
    </div>
  );
}
