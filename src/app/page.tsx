import { client } from "@/src/app/lib/sanity/lib/client"
import BlogPostCard from "./components/card/Card"
import { BlogPost } from "./types/BlogPost"


const options = { next: { revalidate: 60 } } // Revalidate cache every 60 seconds

// GROQ Query for fetching blog posts
const BLOG_POSTS_QUERY = `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  excerpt,
  author->{
    _id,
    name,
    "slug": slug.current,
    image
  },
  publishedAt
}`

export default async function Home() {
  const blogPosts: BlogPost[] = await client.fetch(BLOG_POSTS_QUERY, {}, options)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {blogPosts.map((post, index) => (
            <div key={post._id} className={index === 0 ? "md:col-span-2 lg:col-span-3" : ""}>
              <BlogPostCard post={post} isFirst={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

