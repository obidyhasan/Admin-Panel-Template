import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Authentication/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [btnLoading, setBtnLoading] = useState(false);
  const { handelFirebaseLogin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setBtnLoading(true);

    handelFirebaseLogin(data.email, data.password)
      .then(() => {
        setBtnLoading(false);
        navigate("/", { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.log(error);
        setBtnLoading(false);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="font-poppins flex items-center justify-center w-full min-h-screen">
      <div className="card w-full max-w-sm">
        <div className="flex gap-5 flex-col items-center justify-center">
          {/* <img src={logo} className="w-12 border border-base-300" alt="" />
          <img src={nameLogo} className="h-7" alt="" /> */}

          <h1 className="font-semibold text-2xl">Admin Panel</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset space-y-0.5">
              <label className="fieldset-label">Email</label>
              <input
                {...register("email")}
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="fieldset-label">Password</label>
              <input
                {...register("password", { minLength: 6 })}
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              {errors.password && (
                <label className="text-red-500 text-xs">
                  Password length must be at least 6 character
                </label>
              )}

              {btnLoading ? (
                <button className="btn btn-neutral mt-4" disabled>
                  <span className="loading loading-spinner"></span> Login
                </button>
              ) : (
                <button className="btn btn-neutral mt-4">Login</button>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
