import { ReactNode } from "react";

interface BlogPostsProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogPostsProps) {
  return <div className="flex-grow">{children}</div>;
}