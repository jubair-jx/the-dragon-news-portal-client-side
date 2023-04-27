import React from "react";
import NavigationBar from "../../Shared/NavigationBar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-100 h-screen mt-0">
      <div className="pt-5">
        <NavigationBar></NavigationBar>

        <div className="hero  bg-base-200">
          <div className="hero-content flex-col mt-10 ">
            <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="text-center ">
                  <h1 className="text-xl font-medium">Register Your Account</h1>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Your Picture</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Picture"
                    className="input input-bordered"
                    name="picture"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn ">Register</button>
                  <span className="text-center mt-5 text-sm font-medium">
                    Already Have a Account ?{" "}
                    <Link to="/login" className="text-red-400">
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
