import React, { useContext, useState } from "react";
import NavigationBar from "../../Shared/NavigationBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    const check = e.target.checked;
    setChecked(check);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const picture = form.picture.value;

    createUser(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-100 h-screen mt-0">
      <div className="pt-5">
        <NavigationBar></NavigationBar>

        <div className="hero  bg-base-200">
          <div className="hero-content flex-col mt-10 ">
            <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
              <form onSubmit={handleFormSubmit} className="card-body">
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
                  <div className="flex items-start mt-4">
                    <div className="flex items-center h-5">
                      <input
                        onClick={handleChecked}
                        id="terms"
                        type="checkbox"
                        name="checkbox"
                        className="w-4 h-4 border focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="terms"
                      className="ml-2 text-sm font-medium text-gray-900 "
                    >
                      I agree with the{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button disabled={!checked} className="btn ">
                    Register
                  </button>
                  <span className="text-center mt-5 text-sm font-medium">
                    Already Have a Account ?{" "}
                    <Link to="/login" className="text-red-400">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
