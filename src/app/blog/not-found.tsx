import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white gap-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold -mt-32">Post Not Found</h1>
        <p className="text-gray-600">
          {"Sorry, we couldn't find the post you're looking for."}
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
