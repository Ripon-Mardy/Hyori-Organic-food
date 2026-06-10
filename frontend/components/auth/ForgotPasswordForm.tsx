interface ForgotPasswordFormProps {
  switchToLogin: () => void;
}

export default function ForgotPasswordForm({
  switchToLogin,
}: ForgotPasswordFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Forgot Password</h2>

      <p className="text-sm text-gray-500 text-center mt-2">
        Enter your email address and we'll send you a password reset link.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md"
        >
          Send Reset Link
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={switchToLogin}
            className="text-sm underline"
          >
            Back to Login
          </button>
        </div>
      </form>
    </>
  );
}
