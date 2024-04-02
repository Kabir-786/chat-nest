import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shado bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-white">
            Login <span className="text-cyan-500">ChatNest</span>
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full input input-bordered h-10"
              />
            </div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-cyan-500 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </a>

            <div>
              <button className="btn btn-block mt-2 btn-sm">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
