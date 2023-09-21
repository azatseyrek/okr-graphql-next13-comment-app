'use client';

import Link from 'next/link';

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-[75%]">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-primary">Login now!</h1>
          <p className="py-6 ">
            Unlock a world of possibilities – Log in and explore!
          </p>
        </div>
        <div className="card w-full max-w-sm shadow-2xl min-w-[325px]">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  href="/auth/register"
                  className="label-text-alt text-lg  link link-hover text-secondary "
                >
                  Create an account.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
