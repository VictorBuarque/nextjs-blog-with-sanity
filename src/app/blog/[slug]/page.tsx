import PostDetail from "../../components/post-detail/PostDetail";
import { client } from "../../lib/sanity/lib/client";

type Params = Promise<{ slug: string }>

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  author->{
    _id,
    name,
    image
  },
  publishedAt,
  content
}`, { slug });

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-4xl font-bold -mt-32">Project Not Found</h1>
        <p className="text-gray-600">
          {"Sorry, we couldn't find the post you're looking for."}
        </p>
        <a
          href="/en/projects"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          View All Posts
        </a>
      </div>
    );
  }

  return (
    <section className="mx-auto container max-w-7xl h-screen">
      <PostDetail post={post}/>
    </section>
  );
}