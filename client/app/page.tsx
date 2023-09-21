import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero-content text-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Hello there</h1>
        <p className="py-6 text-xl">
          Welcome to our post comment platform! Join the conversation, connect
          with others, and share your insights. It's time to log in and let your
          voice be heard.
        </p>
        <Link href="/auth/login" className="btn w-40 text-md btn-primary">
          login
        </Link>
      </div>
    </div>
  );
}
