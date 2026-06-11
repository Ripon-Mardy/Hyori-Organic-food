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
          <label className="block mb-2 text-sm font-medium text-(--heading-color)">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-(--heading-color)">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-(--bg-color) font-semibold cursor-pointer text-white py-3 rounded-md hover:bg-(--bg-hover-color) transition-all duration-100"
        >
          Login
        </button>
        <button
          type="button"
          onClick={switchToForgotPassword}
          className="flex items-center justify-center text-sm underline text-(--text-color) mx-auto hover:cursor-pointer hover:text-(--text-green) transition-colors duration-100"
        >
          Lost your password?
        </button>

        <div className="text-center text-sm">
          No account?
          <button
            type="button"
            onClick={switchToRegister}
            className="ml-2 underline cursor-pointer hover:text-(--text-green) transition-colors duration-100"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}
