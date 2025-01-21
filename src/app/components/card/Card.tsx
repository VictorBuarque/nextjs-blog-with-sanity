import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/app/components/ui/card";
import { Badge } from "@/src/app/components/ui/badge";
import { Button } from "@/src/app/components/ui/button";
import { CalendarIcon, UserIcon } from "lucide-react";
import type { BlogPost } from "@/src/app/types/BlogPost";
import { urlForImage } from "@/src/app/lib/sanity/lib/image";
import { ErrorBoundary } from "react-error-boundary";

interface BlogPostCardProps {
  post: BlogPost;
  isFirst?: boolean;
}

export default function BlogPostCard({
  post,
  isFirst = false,
}: BlogPostCardProps) {
  const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
  const authorImageUrl = post.author.image
    ? urlForImage(post.author.image)?.url()
    : null;

  return (
    <ErrorBoundary fallback={<div>Error loading blog post card</div>}>
      <div className="flex flex-col items-center justify-center lg:items-start w-full gap-10">
        <p className={`${isFirst ? "text-4xl font-bold" : "hidden"}`}>
          Recently Posts:
        </p>
        <p className={`${isFirst ? "hidden" : "text-4xl font-bold"}`}>
          Other Posts:
        </p>
        <Card
          className={`flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 ${isFirst ? "w-full lg:max-w-screen 2xl:max-w-screen-2xl" : "w-full lg:max-w-[640px]"}`}
        >
          <CardHeader className="">
            <div
              className={`relative ${isFirst ? "size-[200px] lg:min-h-[430px]" : "size-[200px] lg:min-h-[360px]"} w-full`}
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-fill rounded transition-transform duration-300 ease-in-out hover:scale-105 "
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-6">
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
            <h2
              className={`${isFirst ? "text-3xl" : "text-2xl"} font-bold tracking-tight mb-2`}
            >
              {post.title}
            </h2>
            <p
              className={`text-sm text-muted-foreground ${isFirst ? "line-clamp-4" : "line-clamp-3"}`}
            >
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button asChild className="w-full">
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ErrorBoundary>
  );
}
