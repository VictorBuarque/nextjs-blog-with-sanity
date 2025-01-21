import Image from "next/image";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import type { BlogPost } from "@/src/app/types/BlogPost";
import { urlForImage } from "@/src/app/lib/sanity/lib/image";
import { CalendarIcon, UserIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export default function PostDetail({ post }: { post: BlogPost }) {
  const mainImageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.url()
    : null;
  const authorImageUrl = post.author.image
    ? urlForImage(post.author.image)?.url()
    : null;

  return (
    <article>
      <header className="my-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {format(new Date(post.publishedAt), "MMM d, yyyy")}
          </Badge>
          <div className="flex items-center">
            {post.author ? (
              <Image
                src={authorImageUrl || "/placeholder.svg"}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
            ) : (
              <UserIcon className="h-6 w-6 mr-2" />
            )}
            <span className="text-sm text-muted-foreground">
              {post.author?.name || "Unknown Author"}
            </span>
          </div>
        </div>
      </header>
      <Image
        src={mainImageUrl || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-auto mb-8 rounded-lg"
      />
      <div className="prose max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
