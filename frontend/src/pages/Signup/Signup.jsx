import React from 'react'
import Gender from './Gender';

const Signup = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shado bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

          <h1 className="text-3xl font-semibold text-center text-white">
            Signup <span className="text-cyan-500">ChatNest</span>
          </h1>

          <form>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Fullname</span>
              </label>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="jhondoe"
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

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <Gender/>

            <a
              href="#"
              className="text-sm hover:underline hover:text-cyan-500 mt-2 inline-block"
            >
              Already have an account?
            </a>

            <div>
              <button className="btn btn-block mt-2 btn-sm">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup