interface RegisterFormProps {
  switchToLogin: () => void;
}

export default function RegisterForm({ switchToLogin }: RegisterFormProps) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      <form className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium">Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-md p-3"
          />
        </div>

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
          Register
        </button>

        <div className="text-center text-sm">
          Already have an account?
          <button
            type="button"
            onClick={switchToLogin}
            className="ml-2 underline"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
