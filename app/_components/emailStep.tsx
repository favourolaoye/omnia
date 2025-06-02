import { FcGoogle } from "react-icons/fc";

export default function EmailStep() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-[400px] max-w-2xl bg-white rounded-xl shadow-xs shadow-gray-300 p-6 space-y-6">
        
        {/* Branding & Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center text-purple-600">Omnia</h1>
          <h2 className="text-base font-medium text-gray-700">Create your account</h2>
        </div>

        {/* Email Input */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <span>I agree to the <a href="#" className="text-purple-600 underline">Terms of Use</a> and <a href="#" className="text-purple-600 underline">Privacy Policy</a>.</span>
          </label>
        </div>

        {/* Submit / Continue Button */}
        <button className="w-full bg-purple-600 font-medium text-white py-2 rounded-md hover:bg-purple-700 transition">
          Continue with email
        </button>

        {/* OR Divider */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex-1 h-px bg-gray-300"></div>
          or
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Auth Button */}
        <button className="flex items-center justify-center gap-3 border border-gray-300 w-full py-2 rounded-md hover:bg-gray-100 transition">
          <FcGoogle size={20} />
          <span className="text-sm">Signin with Google</span>
        </button>
      </div>
    </div>
  );
}
