import { cookies } from 'next/headers';
import Link from 'next/link';

import { COOKIE_NAME } from '@/constants';

export default function Home() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(COOKIE_NAME);

  return (
    <div className="hero-content text-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Hello there</h1>
        <p className="py-6 text-xl">
          Welcome to our post comment platform! Join the conversation, connect
          with others, and share your insights. It's time to log in and let your
          voice be heard.
        </p>
        {!cookie ? (
          <Link href="/auth/login" className="btn w-40 text-md btn-primary">
            login
          </Link>
        ) : (
          <Link href="/posts" className="btn w-40 text-md btn-primary">
            posts
          </Link>
        )}
      </div>
    </div>
  );
}
