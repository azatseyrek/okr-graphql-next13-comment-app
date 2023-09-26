'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { teko } from '@/fonts';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SiGraphql } from 'react-icons/si';

const Header = () => {
  const router = useRouter();

  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const res = await axios.post('/api/authentication/logout');
      if (res.status === 200) {
        toast.success('Loged out! Pleas wait...');
        localStorage.removeItem('me');
        router.push('/');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="flex items-center justify-center gap-2">
          <SiGraphql size={60} color="#b01280" className="text-white" />
          <span
            className={`uppercase ${teko.className} text-lg lg:text-3xl text-[#e7c3de]`}
          >
            Code.Grow.Inspire
          </span>
        </Link>
      </div>
      {pathname === '/posts' && (
        <div className="flex-none">
          <div className="dropdown dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar h-16 w-16"
            >
              <Image
                width={64}
                height={64}
                alt="user"
                src="/assets/defaultProfilePicture.png"
              />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 p-2 shadow"
            >
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
