interface RegisterFormProps {
  switchToLogin: () => void;
}

export default function RegisterForm({ switchToLogin }: RegisterFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      <form className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-(--heading-color)">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-400 rounded-md p-3 outline-none text-sm"
          />
        </div>

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
          className="w-full bg-(--bg-color) hover:bg-(--bg-hover-color) font-semibold transition-colors duration-100 text-white py-3 rounded-md cursor-pointer"
        >
          Register
        </button>

        <div className="text-center text-sm">
          Already have an account?
          <button
            type="button"
            onClick={switchToLogin}
            className="ml-2 underline hover:text-(--text-hover-color) transition-colors duration-100 cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
