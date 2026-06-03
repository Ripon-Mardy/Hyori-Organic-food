import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Login = ({ loginPopup }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2">
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Modal */}
      <div className="relative z-10 bg-white p-5 shadow-xl w-full max-w-md rounded">
        <h2 className="text-xl lg:text-2xl font-bold text-center">Login</h2>

        {/* cross button  */}
        <span
          onClick={() => loginPopup()}
          className="absolute right-2 top-2 text-xl text-gray-700 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <form action="#" className="mt-10 space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-(--heading-color) text-sm font-medium"
            >
              Username or Email *
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 outline-none rounded py-3 px-4 text-sm lg:text-base text-(--text-color)"
              placeholder="Enter your username or email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-(--heading-color) text-sm font-medium"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 outline-none rounded py-3 px-4 text-sm lg:text-base text-(--text-color)"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-(--text-color)">
              <input type="checkbox" />
              Remember me
            </div>
            <button className="text-sm text-(--text-color) hover:text-(--text-hover-color) transition duration-100 underline">
              Lost your password?
            </button>
          </div>

          <button className="bg-(--bg-color) text-white py-2 px-8 rounded text-sm hover:bg-(--bg-hover-color) transition duration-100 font-semibold cursor-pointer">
            Login
          </button>

          <div className="flex items-center justify-center text-sm gap-2">
            <p> No account yet?</p>
            <button className="text-sm text-(--heading-color) underline cursor-pointer hover:text-(--text-hover-color) transition duration-100">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
