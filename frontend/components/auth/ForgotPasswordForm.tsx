interface ForgotPasswordFormProps {
  switchToLogin: () => void;
}

export default function ForgotPasswordForm({
  switchToLogin,
}: ForgotPasswordFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Forgot Password</h2>

      <p className="text-sm text-(--text-color) text-center mt-2">
        Enter your email address and we'll send you a password reset link.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-(--heading-color)">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white py-3 text-sm font-semibold rounded-md bg-(--bg-color) hover:bg-(--bg-hover-color) cursor-pointer transition-colors duration-100"
        >
          Send Reset Link
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={switchToLogin}
            className="text-sm underline text-(--text-color) hover:text-(--text-hover-color) transition-colors duration-100 cursor-pointer"
          >
            Back to Login
          </button>
        </div>
      </form>
    </>
  );
}
