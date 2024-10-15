import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;
const Hosting = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
import toast from "react-hot-toast";
const SignUp = () => {
    const navigate = useNavigate();
    const {
      updateUserProfile,
      createUser,
      signInWithGoogle,
      loading,
      setLoading,
    } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const { name, email, password } = data;
      const imageFile = { image: data.photo[0] }; // Make sure this is a File object
      const res = await axios.post(Hosting, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    // console.log(res.data.data.display_url);
      const photo = res.data.data.display_url;
      const newUser = await createUser(email, password);
      updateUserProfile(name, photo);
      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false)
    }
  };

    const handelGoogleLogin = async () => {
      try {
        setLoading(true);
        await signInWithGoogle();
        navigate("/");
        toast.success("Signup Successfull With Google");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        setLoading(false)
      }
    };
  return (
    <div className="flex justify-center items-center min-h-screen">
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
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to StayInn</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                {...register("name")}
                required
                type="text"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input required {...register("photo")} type="file" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email")}
                required
                type="email"
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
                {...register("password")}
                required
                type="password"
                autoComplete="new-password"
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
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
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
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="hover:underline hover:text-teal-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
