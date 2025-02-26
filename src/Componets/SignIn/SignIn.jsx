import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, setLoading, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { email, password } = data;
      const logUser = await signIn(email, password);
      navigate("/");
      toast.success("Signin Successfull");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handelGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate("/");
      toast.success("Signin Successfull With Google");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen font-work-sans">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <Link
          to="/"
          className="-mt-6 flex gap-1 items-center hover:text-teal-500 hover:cursor-pointer"
        >
          <span>
            <FaArrowLeft></FaArrowLeft>
          </span>
          Back
        </Link>
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold font-Playfai">Sign In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password")}
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-teal-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin m-auto" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          {/* <button
            onClick={openModal}
            className="text-xs hover:underline hover:text-teal-500 text-gray-400"
          >
            Forgot password?
          </button> */}
          {/* <ForgetPassword
            isOpen={isModalOpen}
            onClose={closeModal}
          ></ForgetPassword> */}
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          //   disabled={loading}
          onClick={handelGoogleLogin}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/sign-up"
            className="hover:underline hover:text-teal-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
