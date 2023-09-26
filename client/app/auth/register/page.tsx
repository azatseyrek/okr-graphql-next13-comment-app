'use client';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const fullName = e.currentTarget.fullName.value;

    const payload = {
      input: {
        data: {
          email,
          password,
          fullName,
        },
      },
    };

    try {
      await axios.post('/api/authentication/register', payload);

      toast.success('Created! You are redirecting ... ');
      router.push('/auth/login');
    } catch (e) {
      toast.error('User not found !');
    }
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-[75%]">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-secondary">Register now!</h1>
          <p className="py-6 ">
            Unlock a world of possibilities – Register and explore!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="card w-full max-w-sm shadow-2xl min-w-[325px]"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="full name"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  href="/auth/login"
                  className="label-text-alt text-lg  link link-hover text-primary "
                >
                  Do you have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
