import React, { useContext } from "react";
import NavigationBar from "../../Shared/NavigationBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/category/0";

  const handleFormLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        form.reset();
        navigate(from, { replace: true });
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
          <div className="hero-content flex-col mt-16 ">
            <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
              <form onSubmit={handleFormLogin} className="card-body">
                <div className="text-center ">
                  <h1 className="text-xl font-medium">Login Your Account</h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn ">Login</button>
                  <span className="text-center mt-5 text-sm font-medium">
                    Don't Have a Account ?{" "}
                    <Link to="/register" className="text-red-400">
                      Register
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

export default Login;
