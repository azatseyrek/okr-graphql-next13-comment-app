import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { teko } from '@/fonts';
import { SiGraphql } from 'react-icons/si';

const Header = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="flex items-center justify-center gap-2">
          <SiGraphql size={60} color="#b01280" className="text-white" />
          <span
            className={`uppercase ${teko.className} text-4xl text-[#e7c3de]`}
          >
            Code.Grow.Inspire
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end ">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar h-16 w-16"
          >
            <div className="mx-auto w-16 rounded-full">
              <Image
                src="/assets/azatseyrek.jpg"
                alt="azat"
                width={450}
                height={450}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 p-2 shadow"
          >
            <li>
              <button className="justify-between">Profile</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
