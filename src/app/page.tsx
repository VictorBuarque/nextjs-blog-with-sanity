import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const options = { next: { revalidate: 60 } }; // Revalidate cache every 60 seconds

// GROQ Query for fetching blog posts
const EVENTS_QUERY = `*[_type == "blog" && defined(slug.current)]{
  _id,
  title,
  description,
  date,
  slug
}|order(date desc)`;

export default async function Home() {
  const data = await client.fetch(EVENTS_QUERY, {}, options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-4xl font-bold -tracking-tighter">TESTE</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {data.map((item: any) => (
          <li className="bg-white p-4 rounded-lg" key={item._id}>
            <Link href={`/events/${item.slug.current}`}>
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
              {item.date && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
