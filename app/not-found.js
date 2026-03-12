import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">

      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="text-xl mt-4">
        Page Not Found
      </p>

      <Link
        href="/home"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded"
      >
        Go Back Home
      </Link>

    </div>
  );
}