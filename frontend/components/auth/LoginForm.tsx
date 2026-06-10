interface LoginFormProps {
  switchToRegister: () => void;
  switchToForgotPassword: () => void;
}

export default function LoginForm({
  switchToRegister,
  switchToForgotPassword,
}: LoginFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <form className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Password</label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border rounded-md p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md"
        >
          Login
        </button>
        <button
          type="button"
          onClick={switchToForgotPassword}
          className="flex items-center justify-center text-sm underline text-(--text-color) mx-auto hover:cursor-pointer"
        >
          Lost your password?
        </button>

        <div className="text-center text-sm">
          No account?
          <button
            type="button"
            onClick={switchToRegister}
            className="ml-2 underline"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}
